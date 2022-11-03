/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import React from 'react';

import Flexboard from './Flexboard';

describe('Flexboard', () => {
  it('should render', () => {
    const { container } = render(<Flexboard />);
    expect(container).toBeInTheDocument();
  });
});
