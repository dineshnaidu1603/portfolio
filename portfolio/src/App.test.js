import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio text', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello i'm dinesh/i);
  expect(linkElement).toBeInTheDocument();
});
