import React, { useCallback, useState } from 'react';
import Popover from '@idui/react-popover';
import PropTypes from 'prop-types';
import Tree from '@idui/react-tree';
import { Input, SearchTreeInput, TreeWrapper } from './styled';
import SearchTreeLeaf from './components/SearchTreeLeaf';

function TreeSelect({
  value,
  onChange,
  renderSearchInput,
  renderInput,
  maxTreeHeight,
  hideScrollbar,
  valueKey,
  placeholder,
  searchPlaceholder,
  searchTreeBottomAddon,
  searchTreeScrollBottomAddon,
  ...nodeProps
}) {
  const [search, setSearch] = useState();

  const handleClear = useCallback(() => {
    onChange('');
  }, [onChange]);

  return (
    <Popover
      placement="bottom"
      withArrow={false}
      trigger="click"
      useTriggerWidth
      content={({ close }) => (
        <div>
          {renderSearchInput({
            value: search,
            onChange: setSearch,
            placeholder: searchPlaceholder,
          })}
          <TreeWrapper maxHeight={maxTreeHeight} hideScrollbar={hideScrollbar}>
            <Tree
              search={search}
              close={close}
              onSelect={onChange}
              idKey={valueKey}
              valueKey={valueKey}
              {...nodeProps}
            />
            {searchTreeScrollBottomAddon}
          </TreeWrapper>
          {searchTreeBottomAddon}
        </div>
      )}
    >
      {renderInput({ value, onClear: handleClear, placeholder })}
    </Popover>
  );
}

TreeSelect.propTypes = {
  ...Tree.propTypes,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  renderInput: PropTypes.func,
  renderSearchInput: PropTypes.func,
  renderLeaf: PropTypes.func,
  canSelectParentNode: PropTypes.bool,
  closeOnSelect: PropTypes.bool,
  maxTreeHeight: PropTypes.string,
  hideScrollbar: PropTypes.bool,
  placeholder: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  searchTreeBottomAddon: PropTypes.any,
  searchTreeScrollBottomAddon: PropTypes.any,
};

TreeSelect.defaultProps = {
  ...Tree.defaultProps,
  nodes: [],
  renderInput: (props) => <Input readOnly {...props} />,
  renderSearchInput: (props) => <SearchTreeInput autoFocus {...props} />,
  renderLeaf: (props) => <SearchTreeLeaf {...props} />,
  canSelectParentNode: false,
  closeOnSelect: true,
  maxTreeHeight: '300px',
  hideScrollbar: false,
  valueKey: 'value',
  labelKey: 'label',
  onChange: () => {},
};

export default TreeSelect;
