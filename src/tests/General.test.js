import { render, screen } from '@testing-library/react';
import General from '../components/General';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

it('renders Form', () => {
  render(<General />);
  const form = screen.getByTestId('general-form');

  expect(form).toBeInTheDocument();
});

it('receives and display the right props', () => {
  const handleChange = jest.fn;
  const props = { firstName: 'Opeyemi', handleChange: handleChange };
  render(<General firstName={props.firstName} handleChange={props.handleChange} />);

  const firstNameField = screen.getByPlaceholderText(/First Name/i);
  expect(firstNameField).toHaveAttribute('value', 'Opeyemi');
});

it('changes value of input field', () => {
  render(<General />);

  userEvent.type(screen.getByPlaceholderText(/First Name/i), 'Abdullahi');
  expect(screen.getByPlaceholderText(/First Name/i)).toHaveValue('Abdullahi');
});
