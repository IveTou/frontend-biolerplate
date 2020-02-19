import React from 'react'
import { render } from '@testing-library/react'
import Header from './'

test('renders Header', () => {
  const { getByText } = render(<Header />)
  const linkElement = getByText(/Header/i)
  expect(linkElement).toBeInTheDocument()
})
