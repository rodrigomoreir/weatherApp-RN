import React from 'react'
import HomeScreen from '../../../src/screens/HomeScreen'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../../src/helpers/testing'

describe('Home Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<HomeScreen />)
  })

  test('renders correctly', () => {
    renderWithTheme(<HomeScreen />)
  })
})
