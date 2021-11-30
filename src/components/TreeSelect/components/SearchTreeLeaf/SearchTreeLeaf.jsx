import React from 'react';
import { Container } from './styled';

function SearchTreeLeaf({
  toggle,
  close,
  onSelect,
  hasChildren,
  isOpen,
  canSelectParentNode,
  closeOnSelect,
  valueKey,
  labelKey,
  className,
  ...props
}) {
  const handleClick = () => {
    if (!hasChildren || canSelectParentNode) {
      onSelect(props[valueKey]);
      if (closeOnSelect) {
        return close();
      }
    }
  };

  return (
    <Container
      className={className}
      onClick={canSelectParentNode ? undefined : toggle}
    >
      <span onClick={canSelectParentNode ? toggle : undefined}>
        {hasChildren && (isOpen ? '▾' : '▸') + ' '}
      </span>
      <span
        dangerouslySetInnerHTML={{ __html: props[labelKey] }}
        onClick={handleClick}
      />
    </Container>
  );
}

export default SearchTreeLeaf;
