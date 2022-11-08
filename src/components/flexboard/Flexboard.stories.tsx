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

// Create a master template for mapping args to render the Button component
const Template: Story = () => {
  return (
    <FlexboardProvider>
      <FlexboardFrame>
        <center>
          <h2>Frame Content</h2>
        </center>
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
        <center>
          <h2>Flexboard Content</h2>
        </center>
      </Flexboard>
    </FlexboardProvider>
  );
};

// Reuse that template for creating different stories
export const flexboard = Template.bind({});
