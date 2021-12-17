import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { MotiView } from 'moti';

import { Header } from '../../components/Header';
import { CityProps } from '../HomeScreen';

import {
  StyledContainer,
  StyledWeatherContent,
  StyledCityTitle,
  StyledTemperatureTitle,
  StyledWeatherTitle,
  StyledWeatherDetailsCard,
  StyledSeparator,
  StyledInfoContent
} from './styles';

interface Params {
  cityData: CityProps
}

const DetailsScreen = () => {
  const { goBack } = useNavigation();
  const route = useRoute();
  const { cityData } = route.params as Params

  return (
    <>
      <Header title={'Details'} goBack={goBack} />
      <StyledContainer>
        <StyledWeatherContent>
          <StyledCityTitle>{cityData.name} - {cityData.country}</StyledCityTitle>
          <StyledTemperatureTitle>{cityData.temperature}°</StyledTemperatureTitle>
          <StyledWeatherTitle>{cityData.weather}</StyledWeatherTitle>
          <StyledWeatherTitle>Max.: {cityData.temperatureMax}° | Min.: {cityData.temperatureMin}°</StyledWeatherTitle>
          <StyledWeatherTitle>Feels like: {cityData.feelsLike}°</StyledWeatherTitle>
        </StyledWeatherContent>
        <MotiView>

          <StyledWeatherDetailsCard>

            <StyledWeatherTitle>Outras informações de Clima</StyledWeatherTitle>
            <StyledSeparator />

            <StyledInfoContent>
              <StyledWeatherTitle>Visibility</StyledWeatherTitle>
              <StyledWeatherTitle>{cityData.visibility}</StyledWeatherTitle>
            </StyledInfoContent>

            <StyledInfoContent>
              <StyledWeatherTitle>Humidity</StyledWeatherTitle>
              <StyledWeatherTitle>{cityData.humidity} %</StyledWeatherTitle>
            </StyledInfoContent>

            <StyledInfoContent>
              <StyledWeatherTitle>Speed Wind</StyledWeatherTitle>
              <StyledWeatherTitle>{cityData.speedWind} m/s</StyledWeatherTitle>
            </StyledInfoContent>

            <StyledInfoContent>
              <StyledWeatherTitle>Cloud Percentage</StyledWeatherTitle>
              <StyledWeatherTitle>{cityData.cloudPercentage} %</StyledWeatherTitle>
            </StyledInfoContent>

            <StyledInfoContent>
              <StyledWeatherTitle>Atmospheric Pressure</StyledWeatherTitle>
              <StyledWeatherTitle>{cityData.atmPressure} hPa</StyledWeatherTitle>
            </StyledInfoContent>

          </StyledWeatherDetailsCard>
        </MotiView>
      </StyledContainer>
    </>
  );
}

export default DetailsScreen;
