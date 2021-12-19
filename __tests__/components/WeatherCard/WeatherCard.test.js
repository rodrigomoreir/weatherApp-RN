import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import WeatherCard from '../../../src/components/WeatherCard';

import { renderWithTheme, matchSnapshotWithTheme } from '../../../src/helpers/testing'

describe('Card', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(
      <WeatherCard
        city='City'
        hour='hour'
        weather='weather'
        temperature='temperature'
        tempMaxAndMin='tempMaxAndMin'
        onPress={jest.fn()}
      />
    );
  });

  test('renders correctly', () => {
    renderWithTheme(
      <WeatherCard
        city='City'
        hour='hour'
        weather='weather'
        temperature='temperature'
        tempMaxAndMin='tempMaxAndMin'
        onPress={jest.fn()}
      />
    );
  });

  test('callback is called on press', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithTheme(
      <WeatherCard
        city='City'
        hour='hour'
        weather='weather'
        temperature='temperature'
        tempMaxAndMin='tempMaxAndMin'
        onPress={onPressMock}
      />
    );
    fireEvent.press(getByText('City'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
