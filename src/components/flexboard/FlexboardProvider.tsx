import React, { ReactNode } from 'react';
import { FC } from 'react';

import './Flexboard.styles.css';

interface Props {
  children?: ReactNode | ReactNode[];
}

const FlexboardProvider: FC<Props> = (props: Props) => {
  return <div className="app-container">{props.children}</div>;
};

export default FlexboardProvider;
