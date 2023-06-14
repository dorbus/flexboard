import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';

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
