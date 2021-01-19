import React, { useState } from 'react';
import { nodes } from 'sampleData';
import TreeSelect from './TreeSelect';

export default {
  title: 'TreeSelect',
  component: TreeSelect,
  argTypes: {
    nodes: {
      disable: true,
      type: 'array',
      description: 'search tree nodes',
    },
    valueKey: {
      control: 'text',
      description: 'property for node value',
      defaultValue: 'value',
      table: {
        defaultValue: {
          summary: 'value',
        },
      },
    },
    labelKey: {
      control: 'text',
      description: 'property for node label',
      defaultValue: 'label',
      table: {
        defaultValue: {
          summary: 'label',
        },
      },
    },
    canSelectParentNode: {
      type: 'boolean',
      description: 'whether node with children selectable or not',
      defaultValue: false,
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    closeOnSelect: {
      type: 'boolean',
      description: 'whether close on select or not',
      defaultValue: true,
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    renderInput: {
      disable: true,
      description:
        'input renderer, accepts { value, onClear, open, close, toggle, isOpen }, should return readonly input',
      table: {
        defaultValue: {
          summary: 'TextInput from @idui/react-inputs',
        },
      },
    },
    renderSearchInput: {
      disable: true,
      description:
        'search input renderer, accepts { value, onChange, placeholder: searchPlaceholder }, onChange should be called with value string. Use autoFocus to set focus when popover opens',
      table: {
        defaultValue: {
          summary: 'SearchInput from @idui/react-inputs',
        },
      },
    },
    renderLeaf: {
      disable: true,
      description: 'search tree leaf renderer',
      table: {
        defaultValue: {
          summary: 'SearchTreeLeaf from @idui/react-tree-select',
        },
      },
    },
    maxTreeHeight: {
      type: 'text',
      description: 'maximum search tree height',
      defaultValue: '300px',
      table: {
        defaultValue: '300px',
      },
    },
    hideScrollbar: {
      type: 'boolean',
      description: 'whether hide search tree scrollbar or not',
      defaultValue: false,
      table: {
        defaultValue: false,
      },
    },
    searchPlaceholder: {
      type: 'text',
      description: 'search input placeholder',
    },
    placeholder: {
      type: 'text',
      description: 'select placeholder',
    },
    searchTreeBottomAddon: {
      disable: true,
      description:
        'elements, rendered after tree outside scroll container (for example you might want to add pagination)',
    },
    searchTreeScrollBottomAddon: {
      disable: true,
      description:
        'elements, rendered after tree inside scroll container (for example you might want to add waypoint)',
    },
    childrenOffset: {
      control: 'text',
      description: 'distance between node childNodes and root',
      defaultValue: '20px',
      table: {
        defaultValue: {
          summary: '20px',
        },
      },
    },
    searchBy: {
      control: 'text',
      description: 'node property for search',
      defaultValue: 'label',
      table: {
        defaultValue: {
          summary: 'label',
        },
      },
    },
    filterHighlighted: {
      control: 'boolean',
      description: 'whether filter search results or not',
      defaultValue: false,
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    highlightClassName: {
      control: 'text',
      description: 'class name for highlighting search matches',
      defaultValue: 'highlight',
      table: {
        defaultValue: {
          summary: 'highlight',
        },
      },
    },
    className: {
      control: 'text',
      description: 'TreeNode className',
    },
  },
};

export function Playground(props) {
  const [value, setValue] = useState('');

  return (
    <TreeSelect {...props} value={value} onChange={setValue} nodes={nodes} />
  );
}
