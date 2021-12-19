import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledFlatlist = styled.FlatList`
  flex: 1;
  width: 100%;
  padding: 10px 15px;
`;

export const StyledSearchContainer = styled.View`
  width: 100%;
  padding: 0 15px 10px;
`

export const StyledContainerEmpty = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`

export const StyledText = styled.Text`
  font-style: italic;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px
`
