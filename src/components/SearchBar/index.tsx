import React from 'react';
import { Image } from 'react-native';

import icSearch from '../../assets/icons/icSearch.png';

import {
  StyledContainer,
  StyledTextInput,
  StyledIconContainer
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
        value={value}
        onChangeText={onChangeText}
      />
      <StyledIconContainer testID='pressable-icon'>
        <Image source={icSearch} />
      </StyledIconContainer>
    </StyledContainer>
  );
};

export default SearchBar;
