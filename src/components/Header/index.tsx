import React from 'react';

import {
  StyledContainer,
  StyledTitle,
  StyledImageContainer,
  StyledImage,
  StyledContent,
  StyledTitleWithGoBack
} from './styles';

import chevronLeft from '../../assets/icons/chevronLeft.png'

interface Props {
  title: string;
  goBack?: () => void;
}

export const Header = ({ title, goBack }: Props) => {
  return (
    <StyledContainer>
      {goBack ? (
        <StyledContent>
          <StyledImageContainer onPress={goBack}>
            <StyledImage source={chevronLeft} />
          </StyledImageContainer>
          <StyledTitleWithGoBack>{title}</StyledTitleWithGoBack>
        </StyledContent>
      ) :
        <StyledTitle>{title}</StyledTitle>
      }
    </StyledContainer >
  );
}
