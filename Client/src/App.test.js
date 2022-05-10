import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import SignUp from './layouts/SignUp';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Pastikan ada form registrasi", () => {
  test("Pastikan ada form email:", () => {
    render(<SignUp/>)
    const inputEmail = screen.getByText("Email")
    expect(inputEmail).toBeInTheDocument()
  })

  test("Pastikan ada form password:", () => {
    render(<SignUp/>)
    const inputPassword = screen.getByText("Password")
    expect(inputPassword).toBeInTheDocument()
  })
})

