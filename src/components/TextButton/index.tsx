import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Title,
} from './styles';

interface Props extends BorderlessButtonProps {
  iconName?: React.ComponentProps<typeof Feather>['name'];
  color?: string;
  title: string;
  onPress: () => void;
}

export function TextButton({
  iconName,
  title,
  onPress,
  color,
  ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest} >
      <Feather
        name={iconName}
        size={20}
        color={color}
      />
      <Title style={{color}} >
        {title}
      </Title>
    </Container>
  );
}