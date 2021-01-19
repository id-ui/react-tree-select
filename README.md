# TreeSelect React Component

[![NPM](https://img.shields.io/npm/v/@idui/react-tree-select.svg)](https://www.npmjs.com/package/@idui/react-tree-select/)
[![Size](https://img.shields.io/bundlephobia/min/@idui/react-tree-select)](https://www.npmjs.com/package/@idui/react-tree-select)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Coverage Status](https://coveralls.io/repos/github/id-ui/react-tree-select/badge.svg?branch=main)](https://coveralls.io/github/id-ui/react-tree-select?branch=main)
[![LICENSE](https://img.shields.io/github/license/id-ui/react-tree-select)](https://github.com/id-ui/react-tree-select/blob/main/LICENSE)

- [Docs](https://id-ui.github.io/react-tree-select/?path=/docs/treeselect--playground)
- [Playground](https://id-ui.github.io/react-tree-select/?path=/story/treeselect--playground)

## Install

```bash
npm install --save @idui/react-tree-select
```

```bash
yarn add @idui/react-tree-select
```

### See props in [Docs](https://id-ui.github.io/react-tree-select/?path=/docs/treeselect--playground)


### Basic Example

```jsx
import React from 'react'
import TreeSelect from '@idui/react-tree-select'

const nodes = [
    { label: 'Cake', value: 'cake' },
    { label: 'Coffee', value: 'coffee', children: [
        { label: 'Cappuccino', value: 'cappuccino' },
        { label: 'Latte', value: 'latte' },
        { label: 'Americano', value: 'americano' },
    ]},
]

function Example() {
  return <TreeSelect 
      nodes={nodes}
      valueKey="value"
      labelKey="label"
      canSelectParentNode={false}
      closeOnSelect={true}
      maxTreeHeight="300px"
      hideScrollbar={false}
      searchPlaceholder="Search"
      // searchTreeBottomAddon={<Pagination ... />}
      // searchTreeScrollBottomAddon={<Waypoint ... />}
  />
}
```

### Custom renderers

```jsx
import React from 'react'
import styled from 'styled-components';
import TreeSelect, { SearchTreeLeaf } from '@idui/react-tree-select'
import { TextInput, SearchInput } from '@idui/react-inputs';

function Example() {
  return <TreeSelect 
            nodes={nodes}
            renderInput={({ value, onClear, placeholder, open, close, toggle, isOpen }) => <Input 
                {...props} 
                readOnly 
                placeholder="Select value" 
                rightAddon={<ArrowDown color={isOpen ? "lightskyblue" : "gray"} />}
                colors={customColors}
            />}
            renderSearchInput={(props) => <StyledSearchTreeInput 
                {...props} 
                autoFocus 
                placeholder="Search"
            />}
            renderLeaf={(props) => <SearchTreeLeaf {...props} />}
        />
}

const Input = styled(TextInput)`
  width: 100%;
`;

const SearchTreeInput = styled(SearchInput)`
  width: 100%;
`;

const StyledSearchTreeInput = styled(SearchTreeLeaf)`
  .highlight {
    background-color: #ffa7a7;
  }
  padding: 5px 10px;
  &:hover {
    background-color: #fafafa;
  }
`
```

### See more details in [storybook](https://id-ui.github.io/react-tree-select/?path=/docs/treeselect--playground)

## License

MIT © [kaprisa57@gmail.com](https://github.com/id-ui)