import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

import {
  Container,
  ButtonText
} from './styles';

export function Button({
  title,
  onPress,
  ...rest
}: Props) {
  
  return (
    <Container onPress={onPress} {...rest} >
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  );
}