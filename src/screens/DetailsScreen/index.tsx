import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

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

  const messagePosition = useSharedValue(-50)
  const messageOpacity = useSharedValue(0)

  const messageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: messagePosition.value }
      ],
      // opacity: messageOpacity.value,
      opacity: interpolate(
        messagePosition.value,
        [-50, 0],
        [0, 1],
        Extrapolate.CLAMP,
      )
    }
  })

  useEffect(() => {
    messagePosition.value = withTiming(0, {
      duration: 700,
      // easing: Easing.bounce
    })
    messageOpacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.bounce
    })
  }, [])

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
        <Animated.View
          from={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 700 }}
          style={[messageStyle]}
        >

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
        </Animated.View>
      </StyledContainer>
    </>
  );
}

export default DetailsScreen;
