import React, { FC } from 'react'; // import React and FunctionalComponent from React
import { useState, useEffect, useRef, useCallback } from 'react'; // importing Hooks

import './Sidebar.styles.css'; // importing sidebar styles
import { Position } from './Sidebar.enums'; // importing Sidebar enums

interface Props {
  direction: Position;
}

const Sidebar: FC<Props> = (props: Props) => {
  // states
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  // sets isResizing to true
  const startResizing = useCallback((mouseDownEvent: any) => {
    setIsResizing(true);
  }, []);

  // sets isResizing to false
  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  // changes the sidebar width while isResizing is true
  const resize = useCallback(
    (mouseMoveEvent: any) => {
      if (isResizing) {
        if (props.direction == Position.left) {
          // set the new sidebar width to = current X coordinate of mouse (X) - left X coordinate of sidebar
          setSidebarWidth(mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left);
        } else if (props.direction == Position.right) {
          // set the new sidebar width to = Right X coordinate of sidebar - current X coordinate of mouse (X)
          setSidebarWidth(sidebarRef.current.getBoundingClientRect().right - mouseMoveEvent.clientX);
        }
      }
    },
    [isResizing]
  );

  // addEventListeners as soon as the component mounts
  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className="app-container">
      {props.direction == Position.left && (
        <>
          <div
            ref={sidebarRef}
            className="app-sidebar"
            style={{ width: sidebarWidth }}
            onMouseDown={(e) => e.preventDefault()}>
            <div className="app-sidebar-content" />
            <div className="app-sidebar-resizer" onMouseDown={startResizing} />
          </div>
          <div className="app-frame" />
        </>
      )}
      {props.direction == Position.right && (
        <>
            <div className="app-frame" />
            <div
              ref={sidebarRef}
              className="app-sidebar"
              style={{ width: sidebarWidth }}
              onMouseDown={(e) => e.preventDefault()}>
              <div className="app-sidebar-resizer" onMouseDown={startResizing} />
              <div className="app-sidebar-content"></div>
            </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
