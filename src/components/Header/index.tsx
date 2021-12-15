import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';

import { StyledContainer, StyledTitle } from './styles';

export const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    console.log(searchValue)

  }, [searchValue])

  return (
    <StyledContainer>
      <StyledTitle>Tempo</StyledTitle>
      <SearchBar
        placeholder='Busque uma cidade'
        value={searchValue}
        onChangeText={filter => setSearchValue(filter)}
      />
    </StyledContainer>
  );
}
