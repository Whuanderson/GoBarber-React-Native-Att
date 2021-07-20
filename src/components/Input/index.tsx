import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components'

import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

import {
  Container,
  TextInput
} from './styles';

export function Input({
  iconName,
  value,
  ...rest
}: Props) {

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
  }

  return (
    <Container isFocused={isFocused}>
      <Feather
        style={{ marginRight: 16 }}
        name={iconName} size={20}
        color={(isFocused || isFilled) ? theme.colors.background_button : theme.colors.placeholder_color}
      />
      <TextInput        
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        keyboardAppearance="dark"
        placeholderTextColor={theme.colors.placeholder_color}
        {...rest}
      />
    </Container>
  );
}