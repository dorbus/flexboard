import React, { FC, ReactElement, useState, useEffect, useRef, useCallback } from 'react';

// Importing sidebar styles
import './Sidebar.styles.css';
// Importing Sidebar enums
import { Position } from './Sidebar.enums';

interface Props {
  direction: Position;
  children: ReactElement;
}

const Sidebar: FC<Props> = (props: Props) => {
  // States
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(268);

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
            style={{ width: sidebarWidth }}
            onMouseDown={(e) => {
              return e.preventDefault();
            }}>
            <div className="app-sidebar-content">{props.children}</div>
            <div className="app-sidebar-resizer" onMouseDown={startResizing} />
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
            style={{ width: sidebarWidth }}
            onMouseDown={(e) => {
              return e.preventDefault();
            }}>
            <div className="app-sidebar-resizer" onMouseDown={startResizing} />
            <div className="app-sidebar-content">{props.children}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
