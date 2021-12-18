import React from 'react'
import DetailsScreen from '../../../src/screens/DetailsScreen'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../../src/helpers/testing'

describe('Details Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<DetailsScreen />)
  })

  test('renders correctly', () => {
    renderWithTheme(<DetailsScreen />)
  })
})
