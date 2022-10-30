import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Sidebar from './Sidebar';
import { Position } from './Sidebar.enums';

export default {
  title: 'Components/Sidebar',
  component: Sidebar
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story = () => {
  return <Sidebar direction={Position.left}><h3>Sidebar Content</h3></Sidebar>;
};

// Reuse that template for creating different stories
export const sidebar = Template.bind({});
