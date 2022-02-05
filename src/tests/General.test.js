import { render, screen } from '@testing-library/react';
import General from '../components/General';
import '@testing-library/jest-dom';

it('renders Form', () => {
  render(<General />);
  const form = screen.getByTestId('general-form');

  expect(form).toBeInTheDocument();
});

it('receives and display the right props', () => {
  const props = { firstName: 'Opeyemi' };
  render(<General firstName={props.firstName} />);

  const firstNameField = screen.getByPlaceholderText(/First Name/i);
  expect(firstNameField).toHaveAttribute('value', 'Opeyemi');
});
