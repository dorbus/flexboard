import React, { FC, ReactNode } from 'react';
import './Flexboard.styles.css';

interface Props {
  children?: ReactNode;
}

const FlexboardFrame: FC<Props> = (props: Props) => {
  return <div className="app-frame">{props.children}</div>;
};

export default FlexboardFrame;
