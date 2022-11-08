import React from 'react';

export const line = (isHovering: boolean, resizerStyle: React.CSSProperties) => {
  return {
    width: isHovering ? '5px' : '',
    background: 'none !important',
    ...resizerStyle
  } as React.CSSProperties;
};

export const shadowline = (isHovering: boolean, resizerStyle: React.CSSProperties) => {
  return {
    width: isHovering ? '5px' : '',
    boxShadow: isHovering ? '2px 2px 2px 1px rgba(0, 0, 0, 0.2)' : '',
    background: isHovering ? 'none !important' : '',
    ...resizerStyle
  } as React.CSSProperties;
};
