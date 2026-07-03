// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CleanBridge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CleanBridge/i);
    expect(titleElement).toBeInTheDocument();
});
