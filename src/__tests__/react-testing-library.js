import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render, cleanup} from 'react-testing-library'
import {FavoriteNumber} from '../favorite-number'

afterEach(() => {
  cleanup()
})

test('renders a number input with a label "Favorite Number"', () => {
  const {getByLabelText, debug} = render(<FavoriteNumber />)
  // Log dom element
  debug()
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
