import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import {
  Flexboard,
  FlexboardProvider,
  FlexboardFrame,
  Position,
  ResizerType
} from '../../components';

export default {
  title: 'Components/Flexboard',
  component: Flexboard
} as Meta;

// Create a master template for mapping args to render the Flexboard component
const RightSidebarTemplate: Story = () => {
  return (
    <FlexboardProvider>
      <FlexboardFrame>
        <h2>Frame Content</h2>
      </FlexboardFrame>
      <Flexboard
        direction={Position.right}
        draggable={true}
        width={400}
        minWidth={200}
        maxWidth={600}
        flexboardStyle={{ backgroundColor: '#f2f3f4' }}
        resizerStyle={{ backgroundColor: 'pink' }}
        resizerType={ResizerType.gutterlane}>
        <h2>Flexboard Content</h2>
      </Flexboard>
    </FlexboardProvider>
  );
};

const LeftSidebarTemplate: Story = () => {
  return (
    <FlexboardProvider>
      <Flexboard
        direction={Position.left}
        draggable={true}
        width={400}
        minWidth={200}
        maxWidth={600}
        flexboardStyle={{ backgroundColor: '#f2f3f4' }}
        resizerStyle={{ backgroundColor: 'pink' }}
        resizerType={ResizerType.gutterlane}>
        <h2>Flexboard Content</h2>
      </Flexboard>
      <FlexboardFrame>
        <h2>Frame Content</h2>
      </FlexboardFrame>
    </FlexboardProvider>
  );
};

const LeftRightSidebarTemplate: Story = () => {
  return (
    <FlexboardProvider>
      <Flexboard
        direction={Position.left}
        draggable={true}
        width={400}
        minWidth={200}
        maxWidth={600}
        flexboardStyle={{ backgroundColor: '#f2f3f4' }}
        resizerStyle={{ backgroundColor: 'pink' }}
        resizerType={ResizerType.gutterlane}>
        <h2>Flexboard Content</h2>
      </Flexboard>
      <FlexboardFrame>
        <h2>Frame Content</h2>
      </FlexboardFrame>
      <Flexboard
        direction={Position.right}
        draggable={true}
        width={400}
        minWidth={200}
        maxWidth={600}
        flexboardStyle={{ backgroundColor: '#f2f3f4' }}
        resizerStyle={{ backgroundColor: 'pink' }}
        resizerType={ResizerType.gutterlane}>
        <h2>Flexboard Content</h2>
      </Flexboard>
    </FlexboardProvider>
  );
};

// Reuse that template for creating different stories
export const leftSidebar = LeftSidebarTemplate.bind({});
export const rightSidebar = RightSidebarTemplate.bind({});
export const leftRightSidebar = LeftRightSidebarTemplate.bind({});
