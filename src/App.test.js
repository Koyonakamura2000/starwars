import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('App', () => {
  render(<App />);
  const skeleton = screen.getByTestId('skeleton');
  screen.debug();
  expect(skeleton).toBeInTheDocument();
});

test('Table generated after API call', async () => {
  const {getByText} = render(<App />); 
  await waitFor(() => {
    expect(getByText('Episode ID')).toBeInTheDocument();
  })
})