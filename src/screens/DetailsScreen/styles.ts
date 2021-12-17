import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const StyledContainer = styled.View`
  flex: 1;
  padding: 0 15px;
`

export const StyledWeatherContent = styled.View`
  padding: 15px;
  align-items: center;
  justify-content: center;
`

export const StyledCityTitle = styled.Text`
  font-size: 30px;
`
export const StyledTemperatureTitle = styled.Text`
  font-size: 65px;
`
export const StyledWeatherTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 3px;
`
export const StyledWeatherDetailsCard = styled.View`
  background-color: pink;
  margin-top: 10px;
  padding: 15px;
  border-radius: 20px;
`
export const StyledSeparator = styled.View`
  height: 1px;
  border: 1px;
  border-color: grey;
  margin: 10px 0;
`
export const StyledInfoContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`
