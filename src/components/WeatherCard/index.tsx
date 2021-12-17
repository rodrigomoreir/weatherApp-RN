import React, { memo } from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  StyledContainer,
  StyledLeftContent,
  StyledRightContent,
  StyledCityContent,
  StyledTitle,
  StyledSubtitle,
  StyledTemperature,
} from './styles';

interface Props extends TouchableOpacityProps {
  city: string;
  hour: string;
  weather: string;
  temperature: string;
  tempMaxAndMin: string;
  onPress: () => void;
}

const WeatherCard = ({ city, hour, weather, temperature, tempMaxAndMin, onPress }: Props) => {
  return (
    <StyledContainer onPress={onPress}>
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

export default memo(WeatherCard);
