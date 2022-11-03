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
        sidebarStyle={{ backgroundColor: '#f2f3f4' }}
        direction={Position.left}
        width={400}
        draggable={true}
        minWidth={200}
        maxWidth={600}
        resizerType={ResizerTypes.line}>
        <ul>
          <li>
            <h2>Hey</h2>
          </li>
          <li>
            <h2>Ananya Das,</h2>
          </li>
          <li>
            <h2>I love you ❤️</h2>
          </li>
          <li>
            <h2>Why you did this to me? 💔😭 </h2>
          </li>
        </ul>
      </Flexboard>
      <FlexboardFrame>
        <h1>Aditya Abrol tum maa chuda bsdk.........</h1>
      </FlexboardFrame>
      <Flexboard
        sidebarStyle={{ backgroundColor: '#f2f3f4' }}
        direction={Position.right}
        width={400}
        draggable={true}
        minWidth={200}
        maxWidth={600}
        resizerType={ResizerTypes.gutterlane}
        resizerStyle={{ backgroundColor: 'pink' }}></Flexboard>
    </FlexboardProvider>
  );
};

// Reuse that template for creating different stories
export const flexboard = Template.bind({});
