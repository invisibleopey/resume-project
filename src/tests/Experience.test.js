import { render, screen } from '@testing-library/react';
import Experience from '../components/Experience';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

it('renders Form', () => {
  const props = { job: {} };
  render(<Experience job={props.job} />);
  const form = screen.getByTestId('experience-form');

  expect(form).toBeInTheDocument();
});

it('receives and display the right props', () => {
  const handleChange = jest.fn;
  const props = { job: { position: 'Manager' }, handleChange: handleChange };
  render(<Experience job={props.job} handleChange={props.handleChange} />);

  const positionField = screen.getByPlaceholderText(/Position/i);
  expect(positionField).toHaveAttribute('value', 'Manager');
});

it('changes value of input field', () => {
  const props = { job: {} };
  render(<Experience job={props.job} />);

  userEvent.type(screen.getByPlaceholderText(/Position/i), 'Developer');
  expect(screen.getByPlaceholderText(/Position/i)).toHaveValue('Developer');
});
