import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const StyledWeatherContent = styled.View`
  padding: 15px;
  align-items: center;
  justify-content: center;
`

export const StyledCityTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const StyledTemperatureTitle = styled.Text`
  font-size: 65px;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const StyledWeatherTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 3px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const StyledWeatherDetailsCard = styled.View`
  margin-top: 10px;
  padding: 15px;
  border-radius: 20px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
`

export const StyledSeparator = styled.View`
  height: 1px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  margin: 10px 0;
`

export const StyledInfoContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`
