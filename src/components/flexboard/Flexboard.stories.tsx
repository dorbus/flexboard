import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Flexboard from './Flexboard';
import { Position, GutterStyles } from './Flexboard.enums';
import FlexboardFrame from './FlexboardFrame';
import FlexboardProvider from './FlexboardProvider';

export default {
  title: 'Components/Flexboard',
  component: Flexboard
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story = () => {
  return (
    <FlexboardProvider>
      <Flexboard
        sidebarStyle={{ backgroundColor: 'grey' }}
        direction={Position.left}
        width={400}
        draggable={true}
        minWidth={200}
        maxWidth={600}
        gutterWidth={10}
        gutterStyle={GutterStyles.line}
        gutterColor="pink"
        gutterHeight={70}></Flexboard>
      <FlexboardFrame>
        <div>Flexboard Frame</div>
      </FlexboardFrame>
    </FlexboardProvider>
  );
};

// Reuse that template for creating different stories
export const flexboard = Template.bind({});
