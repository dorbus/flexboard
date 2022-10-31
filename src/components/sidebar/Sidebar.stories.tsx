import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Sidebar from './Sidebar';
import { Position, GutterStyles } from './Sidebar.enums';

export default {
  title: 'Components/Sidebar',
  component: Sidebar
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story = () => {
  return (
    <Sidebar
      sidebarStyle={{ backgroundColor: 'black' }}
      direction={Position.left}
      width={400}
      draggable={true}
      minWidth={200}
      maxWidth={600}
      gutterWidth={10}
      gutterStyle={GutterStyles.dotted}
      gutterColor="pink"
      gutterHeight={70}
    ></Sidebar>
  );
};

// Reuse that template for creating different stories
export const sidebar = Template.bind({});
