import React from 'react';

import icSearch from '../../assets/icons/icSearch.png';

import { useTheme } from 'styled-components';

import {
  StyledContainer,
  StyledTextInput,
  StyledIconContainer,
  StyledImage
} from './styles';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText }: Props) => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <StyledTextInput
        testID='text-input'
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
      />
      <StyledIconContainer testID='pressable-icon'>
        <StyledImage source={icSearch} />
      </StyledIconContainer>
    </StyledContainer>
  );
};

export default SearchBar;
