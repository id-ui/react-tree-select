import * as React from 'react';
import {TreeProps} from "@idui/react-tree";

/**
 * all props from tree node and some props from tree
 */
export interface SearchTreeLeafProps {
    toggle: () => void;
    close: () => void;
    onSelect: (value: any) => void;
    hasChildren: boolean;
    isOpen: boolean;
    canSelectParentNode: boolean;
    closeOnSelect: boolean;
    valueKey: string;
    labelKey: string;
    className: string;
}

export class SearchTreeLeaf extends React.Component<SearchTreeLeafProps> {}

interface RenderSearchTreeInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

interface RenderInputProps {
    /**
     * TreeSelect value
     */
    value: string;
    /**
     * onClear value handler
     */
    onClear: React.EventHandler<void>;
    /**
     * input placeholder from TreeSelect props
     */
    placeholder?: string;
    /**
     * open menu
     */
    open: () => void;
    /**
     * close menu
     */
    close: () => void;
    /**
     * toggle menu
     */
    toggle: () => void;
    /**
     * is menu open
     */
    isOpen: () => void;
}

export interface TreeSelectProps extends TreeProps {
    /**
     * property for node value
     * @default value
     */
    valueKey?: string;
    /**
     * property for node label
     * @default label
     */
    labelKey?: string;
    /**
     * input renderer, should return readonly input
     * @default TextInput from @idui/react-inputs
     */
    renderInput?: (props: RenderInputProps) => React.ReactChild;
    /**
     * search input renderer, use autoFocus to set focus when popover opens
     * @default SearchInput from @idui/react-inputs
     */
    renderSearchInput?: (props: RenderSearchTreeInputProps) => React.ReactChild;
    /**
     * search tree leaf renderer
     * @default SearchTreeLeaf from @idui/react-tree-select
     */
    renderLeaf?: (props: SearchTreeLeafProps) => React.ReactChild;
    /**
     * whether node with children selectable or not
     * @default false
     */
    canSelectParentNode?: boolean;
    /**
     * whether close on select or not
     * @default true
     */
    closeOnSelect?: boolean;
    /**
     * maximum search tree height
     * @default 300px
     */
    maxTreeHeight?: string;
    /**
     * whether hide search tree scrollbar or not
     * @default false
     */
    hideScrollbar?: boolean;
    /**
     * select placeholder
     */
    placeholder?: string;
    /**
     * search input placeholder
     */
    searchPlaceholder?: string;
    /**
     * elements, rendered after tree outside scroll container (for example you might want to add pagination)
     */
    searchTreeBottomAddon?: React.ReactChildren;
    /**
     * elements, rendered after tree inside scroll container (for example you might want to add waypoint)
     */
    searchTreeScrollBottomAddon?: React.ReactChildren;
}

export default class TreeSelect extends React.Component<TreeSelectProps> {}