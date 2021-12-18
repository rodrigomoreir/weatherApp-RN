import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background} ;
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
