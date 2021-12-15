import styled from 'styled-components/native';

export const StyledContainer = styled.TouchableOpacity`
  height: 120px;
  width: 100%;
  background-color: grey;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
`
export const StyledLeftContent = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
`

export const StyledRightContent = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
`
export const StyledCityContent = styled.View`
`

export const StyledTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const StyledSubtitle = styled.Text`
  font-size: 13px;
  font-weight: bold;
`

export const StyledTemperature = styled.Text`
  font-size: 30px;
`
