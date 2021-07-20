import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
}

import {
  Container,
  ButtonText
} from './styles';

export function Button({
  title,
  ...rest
}: Props) {
  
  return (
    <Container {...rest} >
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  );
}