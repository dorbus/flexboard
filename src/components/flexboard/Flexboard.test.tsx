/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import React from 'react';

import Flexboard from './Flexboard';

test('Should render Flexboard', () => {
  render(<Flexboard />);
});
