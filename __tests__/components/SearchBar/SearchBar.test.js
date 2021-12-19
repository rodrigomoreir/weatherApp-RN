import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme, matchSnapshotWithTheme } from '../../../src/helpers/testing'

import SearchBar from '../../../src/components/SearchBar'

describe('Search Bar', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(
      <SearchBar
        placeholder={'Busque uma cidade'}
        value={'test'}
        onChangeText={jest.fn}
      />
    );
  });

  test('renders correctly', () => {
    renderWithTheme(<SearchBar placeholder='Busque aqui' value='test' onChangeText={jest.fn()} />);
  });

  test('value changes on input text', () => {
    const mockFn = jest.fn();
    const { getByTestId } = renderWithTheme(
      <SearchBar placeholder='Busca' value='test' onChangeText={mockFn} />
    );
    fireEvent.changeText(getByTestId('text-input'), 'value');
    expect(mockFn).toHaveBeenCalledWith('value');
  });
});
