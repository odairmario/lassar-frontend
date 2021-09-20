import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header'

test('render header component and test title props', () => {
  render(<Header title="a test" />);
  const linkElement = screen.getByText(/a test/i);
  expect(linkElement).toBeInTheDocument();
});
