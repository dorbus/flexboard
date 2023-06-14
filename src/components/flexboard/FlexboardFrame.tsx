import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  height: 100vh;
  max-height: 100%;
  background: #ffffff;
  z-index: 1;
`;

interface Props {
  children?: ReactNode;
}

const FlexboardFrame: FC<Props> = (props: Props) => {
  return <Frame>{props.children}</Frame>;
};

export default FlexboardFrame;
