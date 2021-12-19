import React from 'react'

import { renderWithTheme, matchSnapshotWithTheme } from '../../../src/helpers/testing'

import { Header } from '../../../src/components/Header'

describe('Header', () => {
  test('matches snapshot', () => {
    const onPressMock = jest.fn()
    matchSnapshotWithTheme(<Header title={'Header Test'} goBack={onPressMock} />)
  })

  test('renders correctly', () => {
    const onPressMock = jest.fn()
    const { getByText } = renderWithTheme(
      <Header title={'Header Test'} goBack={onPressMock} />,
    )
    const header = getByText('Header Test')
    expect(header).toBeTruthy()
  })

  test('render header with goBack', () => {
    const goBackMock = jest.fn()
    renderWithTheme(
      <Header
        goBack={goBackMock}
        title={'Header Test'}
      />,
    )
  })
})
