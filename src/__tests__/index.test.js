import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { axe } from 'jest-axe';
import TreeSelect from 'components/TreeSelect';
import { nodes } from 'sampleData';
import { Input, SearchTreeInput } from 'components/TreeSelect/styled';

describe('TreeSelect', () => {
  it('accessible', async () => {
    const { container } = render(
      <TreeSelect
        nodes={nodes}
        renderInput={(props) => (
          <div>
            <label htmlFor="input">select</label>
            <Input readOnly id="input" {...props} />
          </div>
        )}
        renderSearchInput={(props) => (
          <div>
            <label htmlFor="search">select</label>
            <SearchTreeInput id="search" {...props} />
          </div>
        )}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('opens search popover', async () => {
    const { container, getByText, queryByText } = render(
      <TreeSelect nodes={nodes} />
    );
    expect(queryByText('Drink')).not.toBeInTheDocument();
    user.click(container.querySelector('input'));
    await waitFor(() => expect(getByText('Drink')).toBeInTheDocument());
  });

  it('opens/closes tree on search', async () => {
    const { container, getByText, getByPlaceholderText } = render(
      <TreeSelect nodes={nodes} searchPlaceholder="search" />
    );
    user.click(container.querySelector('input'));

    await waitFor(() =>
      fireEvent.change(getByPlaceholderText('search'), {
        target: {
          value: 'with sugar',
        },
      })
    );

    await waitFor(() => expect(getByText('With Sugar')).toBeVisible());
  });

  it('calls onChange with clicked value and closes search popover', async () => {
    const onChange = jest.fn();
    const { container, getByText, queryByText, getByPlaceholderText } = render(
      <TreeSelect
        nodes={nodes}
        onChange={onChange}
        searchPlaceholder="search"
      />
    );
    expect(queryByText('Drink')).not.toBeInTheDocument();
    user.click(container.querySelector('input'));
    await waitFor(() => user.click(getByText('Drink')));
    expect(getByPlaceholderText('search')).toBeVisible();
    await waitFor(() => user.click(getByText('Hot Milk')));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('HotMilk');
    await waitFor(() =>
      expect(getByPlaceholderText('search')).not.toBeVisible()
    );
  });

  it('calls onChange with parent node if canSelectParentNode === true', async () => {
    const onChange = jest.fn();
    const { container, getByText, queryByText } = render(
      <TreeSelect
        nodes={nodes}
        onChange={onChange}
        canSelectParentNode
        closeOnSelect={false}
      />
    );
    expect(queryByText('Drink')).not.toBeInTheDocument();
    user.click(container.querySelector('input'));
    await waitFor(() => user.click(getByText('Drink')));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('Drink');
  });

  it('clears value', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <TreeSelect nodes={nodes} value="Drink" onChange={onChange} />
    );
    const input = container.querySelector('input');
    user.click(input.nextElementSibling.firstElementChild.firstElementChild);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('');
  });
});
