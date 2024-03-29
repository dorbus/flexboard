import React, {
  FC,
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
  ReactElement
} from 'react';
import styled from 'styled-components';

// Importing Sidebar enums
import { Position, ResizerType } from './Flexboard.enums';
import { line, shadowline } from './ResizerStyle';

const FlexResizer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  justify-self: flex-end;
  cursor: col-resize;
  resize: horizontal;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7px;
`;

const Flex = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  border-right: #e9e9e9 1px solid;
  flex-direction: row;
  background: #ffffff;
  z-index: 2;

  .app-flexboard-content {
    flex: 1;
  }

  &:hover ${FlexResizer} {
    background: #c1c3c5b4;
  }
`;

interface Props {
  direction?: Position;
  children?: ReactNode | ReactNode[];
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  draggable?: boolean;
  flexboardStyle?: React.CSSProperties;
  resizerType?: ResizerType;
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

  const flexboardResizer = (type: ResizerType) => {
    let style: React.CSSProperties = { ...props.resizerStyle };
    if (type === ResizerType.line) {
      style = line(isHovering, props.resizerStyle ?? {});
    } else if (type === ResizerType.shadowline) {
      style = shadowline(isHovering, props.resizerStyle ?? {});
    }

    const gutterLane: ReactElement = (
      <div
        className="gutter"
        style={{
          height: isHovering ? '25px' : '',
          width: isHovering ? '100%' : '',
          backgroundColor: isHovering ? 'grey' : '',
          borderLeft: isHovering ? 'dashed black' : '',
          borderRight: isHovering ? 'dashed black' : ''
        }}
      />
    );

    return (
      <FlexResizer
        role="presentation"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={startResizing}
        style={style}>
        {type === ResizerType.gutterlane && gutterLane}
      </FlexResizer>
    ) as ReactElement;
  };

  const Sidebar = (position: Position) => {
    return (
      <>
        <Flex
          role="presentation"
          ref={flexboardRef}
          style={{
            width: flexboardWidth,
            minWidth: props.minWidth,
            maxWidth: props.maxWidth,
            ...props.flexboardStyle
          }}
          onMouseDown={(e) => {
            return e.preventDefault();
          }}>
          {position === Position.right && flexboardResizer(props.resizerType ?? ResizerType.line)}
          {/* Sidebar Content */}
          <div className="app-flexboard-content">{props.children ? props.children : <></>}</div>
          {position === Position.left && flexboardResizer(props.resizerType ?? ResizerType.line)}
        </Flex>
      </>
    );
  };

  return Sidebar(props.direction ?? Position.left);
};

Flexboard.defaultProps = {
  direction: Position.left,
  width: 200,
  minWidth: 150,
  maxWidth: 300,
  draggable: false,
  resizerType: ResizerType.line
};

export default Flexboard;
