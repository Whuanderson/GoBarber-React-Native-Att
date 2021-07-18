import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components'
import { Control, Controller } from 'react-hook-form';

import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  iconName: React.ComponentProps<typeof Feather>['name'];
  error: string
}

import {
  Container,
  TextInput,
  Error,
} from './styles';

export function Input({
  iconName,
  control,
  name,
  error,
  ...rest
}: Props) {

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!control.defaultValuesRef)
  }, []);

  return (
    <Container error={error} isFocused={isFocused} >
      <Feather
        style={{ marginRight: 16 }}
        name={iconName}
        size={20}
        color={(isFocused || isFilled) ? theme.colors.background_button : theme.colors.placeholder_color}
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            keyboardAppearance="dark"
            placeholderTextColor={theme.colors.placeholder_color}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...rest}
          />
        )}
        name={name} />
       {error && <Error>{error}</Error>}
    </Container>
  );
}