import styled, { css } from 'styled-components';
import { TextInput, SearchInput } from '@idui/react-inputs';
import { ifProp, prop } from 'styled-tools';

export const Input = styled(TextInput)`
  width: 100%;
`;

export const SearchTreeInput = styled(SearchInput)`
  width: 100%;
`;

export const TreeWrapper = styled.div`
  max-height: ${prop('maxHeight')};
  overflow-y: auto;
  ${ifProp(
    'hideScrollbar',
    css`
      -ms-overflow-style: none;
      scrollbar-width: none;
      ::-webkit-scrollbar {
        display: none;
      }
    `
  )}
`;
