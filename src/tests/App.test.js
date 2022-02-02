import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

it('renders header', () => {
  render(<App />);
  const element = screen.getByText(/resume generator/i);
  expect(element).toBeInTheDocument();
});

it('renders footer', () => {
  render(<App />);
  const element = screen.getByText(/invisibleopey/i);
  expect(element).toBeInTheDocument();
});
