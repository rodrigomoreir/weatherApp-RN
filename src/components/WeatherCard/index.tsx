import React, { memo, useEffect } from 'react';
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

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

interface Props extends TouchableOpacityProps {
  city: string;
  hour: string;
  weather: string;
  temperature: string;
  tempMaxAndMin: string;
  onPress: () => void;
}

const WeatherCard = ({ city, hour, weather, temperature, tempMaxAndMin, onPress }: Props) => {

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
      duration: 500,
      easing: Easing.bounce
    })
    contentOpacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.bounce
    })
  }, [])

  return (
    <Animated.View
      from={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={[contentStyle]}
    >
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
    </Animated.View>
  );
}

export default memo(WeatherCard);
