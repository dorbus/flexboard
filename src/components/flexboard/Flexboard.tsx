import React, { FC, useState, useEffect, useRef, useCallback, ReactNode } from 'react';

// Importing sidebar styles
import './Flexboard.styles.css';
// Importing Sidebar enums
import { Position, ResizerTypes } from './Flexboard.enums';

interface Props {
  direction?: Position;
  children?: ReactNode | ReactNode[];
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  draggable?: boolean;
  flexboardStyle?: React.CSSProperties;
  resizerType?: ResizerTypes;
  resizerStyle?: React.CSSProperties;
}

const Flexboard: FC<Props> = (props: Props) => {
  // States
  const flexboardRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [flexboardWidth, setFlexboardWidth] = useState<number>(props.width ?? 0);
  const [isHovering, setIsHovering] = useState(false);

  // Sets isResizing to true
  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  // Sets isResizing to false
  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Changes the sidebar width while isResizing is true
  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing)
        if (props.direction === Position.left) {
          // Set the new sidebar width to = current X coordinate of mouse (X) - left X coordinate of sidebar
          const left = flexboardRef.current;
          if (left) setFlexboardWidth(mouseMoveEvent.clientX - left.getBoundingClientRect().left);
        } else if (props.direction === Position.right) {
          // Set the new sidebar width to = Right X coordinate of sidebar - current X coordinate of mouse (X)
          const right = flexboardRef.current;
          if (right)
            setFlexboardWidth(right.getBoundingClientRect().right - mouseMoveEvent.clientX);
        }
    },
    [isResizing, props.direction]
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
    <>
      {props.direction === Position.left && (
        <>
          <div
            role="presentation"
            ref={flexboardRef}
            className="app-flexboard"
            style={{
              width: flexboardWidth,
              minWidth: props.minWidth,
              maxWidth: props.maxWidth,
              ...props.flexboardStyle
            }}
            onMouseDown={(e) => {
              return e.preventDefault();
            }}>
            <div className="app-flexboard-content">{props.children ? props.children : <></>}</div>
            {props.draggable && props.resizerType === ResizerTypes.line && (
              <div
                className="app-flexboard-resizer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={startResizing}
                style={{
                  width: isHovering ? '5px' : '',
                  background: 'none',
                  ...props.resizerStyle
                }}
              />
            )}
            {props.draggable && props.resizerType === ResizerTypes.shadowline && (
              <div
                className="app-flexboard-resizer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={startResizing}
                style={{
                  width: isHovering ? '5px' : '',
                  boxShadow: isHovering ? '2pxResizerTypes 2px 2px 1px rgba(0, 0, 0, 0.2)' : '',
                  background: isHovering ? 'none' : '',
                  ...props.resizerStyle
                }}
              />
            )}
            {props.draggable && props.resizerType === ResizerTypes.lane && (
              <div
                className="app-flexboard-resizer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={startResizing}
                style={{ ...props.resizerStyle }}
              />
            )}
            {props.draggable && props.resizerType === ResizerTypes.gutterlane && (
              <div
                className="app-flexboard-resizer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={startResizing}
                style={{ ...props.resizerStyle }}>
                <div className="gutter"></div>
              </div>
            )}
          </div>
        </>
      )}
      {props.direction === Position.right && (
        <>
          <div
            role="presentation"
            ref={flexboardRef}
            className="app-flexboard"
            style={{
              width: flexboardWidth,
              minWidth: props.minWidth,
              maxWidth: props.maxWidth,
              ...props.flexboardStyle
            }}
            onMouseDown={(e) => {
              return e.preventDefault();
            }}>
            {props.draggable && props.resizerType === ResizerTypes.line && (
              <div
                className="app-flexboard-resizer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={startResizing}
                style={{
                  width: isHovering ? '5px' : '',
                  background: 'none !important',
                  ...props.resizerStyle
                }}
              />
            )}
            {props.draggable && props.resizerType === ResizerTypes.shadowline && (
              <div
                className="app-flexboard-resizer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={startResizing}
                style={{
                  width: isHovering ? '5px' : '',
                  boxShadow: isHovering ? '2px 2px 2px 1px rgba(0, 0, 0, 0.2)' : '',
                  background: isHovering ? 'none !important' : '',
                  ...props.resizerStyle
                }}
              />
            )}
            {props.draggable && props.resizerType === ResizerTypes.lane && (
              <div
                className="app-flexboard-resizer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={startResizing}
                style={{ ...props.resizerStyle }}
              />
            )}
            {props.draggable && props.resizerType === ResizerTypes.gutterlane && (
              <div
                className="app-flexboard-resizer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={startResizing}
                style={{ ...props.resizerStyle }}>
                <div
                  className="gutter"
                  style={{
                    height: isHovering ? '25px' : '',
                    width: isHovering ? '100%' : '',
                    backgroundColor: isHovering ? 'grey' : '',
                    borderLeft: isHovering ? 'dashed black' : '',
                    borderRight: isHovering ? 'dashed black' : ''
                  }}></div>
              </div>
            )}
            <div className="app-flexboard-content">{props.children ? props.children : <></>}</div>
          </div>
        </>
      )}
    </>
  );
};

Flexboard.defaultProps = {
  direction: Position.left,
  width: 200,
  minWidth: 150,
  maxWidth: 300,
  draggable: false,
  resizerType: ResizerTypes.line
};

export default Flexboard;
