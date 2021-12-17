import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  background-color: white;
  padding: 15px 15px;
`;

export const StyledTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledContent = styled.View`
  flex-direction: row;
  align-items: center;
`

export const StyledTitleWithGoBack = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-left: 20px;
`;

export const StyledImageContainer = styled.TouchableOpacity`
  background-color: grey ;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: black;
`
export const StyledImage = styled.Image`
  height: 20px;
  width: 20px;
`
