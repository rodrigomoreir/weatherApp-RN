import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View`
  border-radius: 15px;
  height: 40px;
  flex-direction: row;
  ${({ theme: { colors } }) => css`
    background-color: grey;
  `}
`;

export const StyledTextInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: 'black'
}))`
  flex: 1;
  padding-left: 20px;
  color: black;
`;

export const StyledIconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;
