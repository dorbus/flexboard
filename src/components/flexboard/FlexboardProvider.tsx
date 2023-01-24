import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import './Flexboard.styles.css';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

interface Props {
  children?: ReactNode | ReactNode[];
}

const FlexboardProvider: FC<Props> = (props: Props) => {
  return <Container>{props.children}</Container>;
};

export default FlexboardProvider;
