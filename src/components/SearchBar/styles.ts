import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View`
  border-radius: 15px;
  height: 40px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledIconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.Image`
  tint-color: ${({ theme }) => theme.colors.border}
`
