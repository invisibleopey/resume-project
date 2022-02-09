import { render, screen } from '@testing-library/react';
import Overview from '../components/Overview';
import '@testing-library/jest-dom';

it('renders overview container', () => {
  // Mock the props to prevent reading properties of undefined in constructing the DOM
  const props = { schools: [{}], jobs: [{}] };
  render(<Overview schools={props.schools} jobs={props.jobs} />);
  const container = screen.getByTestId('overview-container');

  expect(container).toBeInTheDocument();
});

it('receives and render the right props', () => {
  const props = { firstName: 'Opeyemi', schools: [{}], jobs: [{}] };
  render(<Overview firstName={props.firstName} schools={props.schools} jobs={props.jobs} />);
  const firstName = screen.getByText(/Opeyemi/i);

  expect(firstName).toBeInTheDocument();
});
