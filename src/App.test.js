import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const buttonElemtent = screen.getAllByRole('button')
  expect(buttonElemtent).toHaveLength(2)
})
