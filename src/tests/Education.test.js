import { render, screen } from '@testing-library/react';
import Education from '../components/Education';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

it('renders Form', () => {
  // Mock the props to prevent reading properties of undefined in constructing the DOM
  const props = { school: {} };
  render(<Education school={props.school} />);
  const form = screen.getByTestId('education-form');

  expect(form).toBeInTheDocument();
});

it('receives and display the right props', () => {
  const handleChange = jest.fn;
  const props = { school: { name: 'Unilorin' }, handleChange: handleChange };
  render(<Education school={props.school} handleChange={props.handleChange} />);

  const schoolNameField = screen.getByPlaceholderText(/University Name/i);
  expect(schoolNameField).toHaveAttribute('value', 'Unilorin');
});

it('changes value of input field', () => {
  const props = { school: {} };
  render(<Education school={props.school} />);

  userEvent.type(screen.getByPlaceholderText(/University Name/i), 'UniOsun');
  expect(screen.getByPlaceholderText(/University Name/i)).toHaveValue('UniOsun');
});
