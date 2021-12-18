import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 15px 15px;
`;

export const StyledTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledContent = styled.View`
  flex-direction: row;
  align-items: center;
`

export const StyledTitleWithGoBack = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledImageContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.border}
`
export const StyledImage = styled.Image`
  height: 20px;
  width: 20px;
  tint-color: ${({ theme }) => theme.colors.border}
`
