import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components'
import { Control, Controller } from 'react-hook-form';

import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  iconName: React.ComponentProps<typeof Feather>['name'];
}

import {
  Container,
  TextInput
} from './styles';

export function Input({
  iconName,
  control,
  name,
  ...rest
}: Props) {

  const theme = useTheme();

  return (
    <Container>
      <Feather style={{ marginRight: 16 }} name={iconName} size={20} color={theme.colors.placeholder_color} />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            keyboardAppearance="dark"
            placeholderTextColor={theme.colors.placeholder_color}
            {...rest}
          />
        )}
        name={name}/> 
    </Container>
  );
}