import React from 'react';
import { Text } from 'react-native';

import {
  StyledContainer,
  StyledLeftContent,
  StyledRightContent,
  StyledCityContent,
  StyledTitle,
  StyledSubtitle,
  StyledTemperature
} from './styles';

interface Props {
  city: string;
  hour: string;
  weather: string;
  temperature: string;
  tempMaxAndMin: string;
}

export const WeatherCard = ({ city, hour, weather, temperature, tempMaxAndMin }: Props) => {
  return (
    <StyledContainer>
      <StyledLeftContent>
        <StyledCityContent>
          <StyledTitle>{city}</StyledTitle>
          <StyledSubtitle>{hour}</StyledSubtitle>
        </StyledCityContent>
        <StyledSubtitle>{weather}</StyledSubtitle>
      </StyledLeftContent>
      <StyledRightContent>
        <StyledTemperature>{temperature}</StyledTemperature>
        <StyledSubtitle>{tempMaxAndMin}</StyledSubtitle>
      </StyledRightContent>
    </StyledContainer>
  );
}
