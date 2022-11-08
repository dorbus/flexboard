import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Flexboard from './Flexboard';
import { Position, ResizerTypes } from './Flexboard.enums';
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
        direction={Position.left}
        draggable={true}
        width={400}
        minWidth={200}
        maxWidth={600}
        flexboardStyle={{ backgroundColor: '#f2f3f4' }}
        resizerStyle={{ backgroundColor: 'pink' }}
        resizerType={ResizerTypes.gutterlane}>
        <center>
          <h2>Flexboard Content</h2>
        </center>
      </Flexboard>
      <FlexboardFrame>
        <center>
          <h2>Frame Content</h2>
        </center>
      </FlexboardFrame>
    </FlexboardProvider>
  );
};

// Reuse that template for creating different stories
export const flexboard = Template.bind({});
