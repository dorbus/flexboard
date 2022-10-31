import React, { FC, ReactElement, useState, useEffect, useRef, useCallback } from 'react';

// Importing sidebar styles
import './Sidebar.styles.css';
// Importing Sidebar enums
import { Position } from './Sidebar.enums';

interface Props {
  direction?: Position;
  children?: ReactElement;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  draggable?: boolean;
  sidebarStyle?: React.CSSProperties;
  gutterWidth?: number;
}

const Sidebar: FC<Props> = (props: Props) => {
  // States
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(props.width ? props.width : 0);

  // Sets isResizing to true
  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  // Sets isResizing to false
  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  // Changes the sidebar width while isResizing is true
  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing)
        if (props.direction === Position.left) {
          // Set the new sidebar width to = current X coordinate of mouse (X) - left X coordinate of sidebar
          const left = sidebarRef.current;
          if (left) setSidebarWidth(mouseMoveEvent.clientX - left.getBoundingClientRect().left);
        } else if (props.direction === Position.right) {
          // Set the new sidebar width to = Right X coordinate of sidebar - current X coordinate of mouse (X)
          const right = sidebarRef.current;
          if (right) setSidebarWidth(right.getBoundingClientRect().right - mouseMoveEvent.clientX);
        }
    },
    [isResizing]
  );

  // AddEventListeners as soon as the component mounts
  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  // Conditional rendering based on whether position is left or right
  return (
    <div className="app-container">
      {props.direction === Position.left && (
        <>
          <div
            ref={sidebarRef}
            className="app-sidebar"
            style={{
              width: sidebarWidth,
              minWidth: props.minWidth,
              maxWidth: props.maxWidth,
              ...props.sidebarStyle
            }}
            onMouseDown={(e) => {
              return e.preventDefault();
            }}
          >
            <div className="app-sidebar-content">{props.children ? props.children : <></>}</div>
            {props.draggable && (
              <div
                className="app-sidebar-resizer"
                style={{ flexBasis: props.gutterWidth }}
                onMouseDown={startResizing}
              />
            )}
          </div>
          <div className="app-frame" />
        </>
      )}
      {props.direction === Position.right && (
        <>
          <div className="app-frame" />
          <div
            ref={sidebarRef}
            className="app-sidebar"
            style={{
              width: sidebarWidth,
              minWidth: props.minWidth,
              maxWidth: props.maxWidth,
              ...props.sidebarStyle
            }}
            onMouseDown={(e) => {
              return e.preventDefault();
            }}
          >
            {props.draggable && (
              <div
                className="app-sidebar-resizer"
                style={{ flexBasis: props.gutterWidth }}
                onMouseDown={startResizing}
              />
            )}
            <div className="app-sidebar-content">{props.children ? props.children : <></>}</div>
          </div>
        </>
      )}
    </div>
  );
};

Sidebar.defaultProps = {
  direction: Position.left,
  width: 200,
  minWidth: 150,
  maxWidth: 300,
  draggable: false,
  gutterWidth: 6
};

export default Sidebar;
