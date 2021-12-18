import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

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

import { ANIMATION } from '../../utils/constants';

import {
  StyledContainer,
  StyledWeatherContent,
  StyledCityTitle,
  StyledTemperatureTitle,
  StyledWeatherTitle,
  StyledWeatherDetailsCard,
  StyledSeparator,
  StyledInfoContent,
} from './styles';

interface Params {
  cityData: CityProps
}

const DetailsScreen = () => {
  const { goBack } = useNavigation();
  const route = useRoute();
  const { cityData } = route.params as Params

  const contentPosition = useSharedValue(-50)
  const contentOpacity = useSharedValue(0)

  const contentStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: contentPosition.value }
      ],
      // opacity: contentOpacity.value,
      opacity: interpolate(
        contentPosition.value,
        [-50, 0],
        [0, 1],
        Extrapolate.CLAMP,
      )
    }
  })

  useEffect(() => {
    contentPosition.value = withTiming(0, {
      duration: 700,
      // easing: Easing.bounce
    })
    contentOpacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.bounce
    })
  }, [])

  return (
    <>
      <Header title={'Details'} goBack={goBack} />
      <StyledContainer>
        <Animated.View
          from={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 700 }}
          style={[contentStyle]}
        >
          <StyledWeatherContent>
            <StyledCityTitle>{cityData.name} - {cityData.country}</StyledCityTitle>
            <StyledTemperatureTitle>{cityData.temperature}°</StyledTemperatureTitle>
            <StyledWeatherTitle>{cityData.weather}</StyledWeatherTitle>
            <StyledWeatherTitle>Max.: {cityData.temperatureMax}° | Min.: {cityData.temperatureMin}°</StyledWeatherTitle>
            <StyledWeatherTitle>Feels like: {cityData.feelsLike}°</StyledWeatherTitle>
          </StyledWeatherContent>

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
        <LottieView
          source={ANIMATION.find(weather => weather.weather === cityData.weather)?.icon}
          autoPlay
          loop
          autoSize={true}
          style={{ alignSelf: 'center' }}
        />
      </StyledContainer>
    </>
  );
}

export default DetailsScreen;
