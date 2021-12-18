import React from 'react';

import icSearch from '../../assets/icons/icSearch.png';

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
  return (
    <StyledContainer>
      <StyledTextInput
        testID='text-input'
        placeholder={placeholder}
        placeholderTextColor={'#969CB2'}
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
