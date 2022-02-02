import { render, screen } from '@testing-library/react';
import General from '../components/General';
import '@testing-library/jest-dom';

it('renders Form', () => {
  render(<General />);
  const form = screen.getByTestId('general-form');

  expect(form).toBeInTheDocument();
});
