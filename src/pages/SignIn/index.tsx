import React, { useEffect, useState, useRef } from 'react';
import { Platform } from '@unimodules/react-native-adapter';

import logoImg from '../../assets/logo.png'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';

import { theme } from '../../global/styles/theme';

import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';


import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View
} from 'react-native';

import {
  Container,
  Logo,
  Title,
  Footer
} from './styles';

interface FormData {
  email: string;
  password: string;
}

export function SignIn() {

  const navigation = useNavigation();

  const {
    handleSubmit,
    control,
  } = useForm();

  function handleCreateAccount() {
    navigation.navigate('SignUp')
  }

  function handleSigIn(form: FormData) {
    const data = {
      email: form.email,
      password: form.password
    }
    console.log(data)
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Logo source={logoImg} />
            <View>
              <Title>Faça seu login</Title>
            </View>
            <Input
              name="email"
              control={control}
              iconName="mail"
              placeholder="E-mail"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={( ) => {}}
            />
            <Input
              name="password"
              control={control}
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handleSigIn)}
            />

            <Button
              title="Entrar"
              onPress={handleSubmit(handleSigIn)}
            />

            <TextButton
              style={{ marginTop: 20 }}
              onPress={() => { }}
              title="Esqueci minha senha"
              color={theme.colors.text}
            />
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Footer>
        <TextButton
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          iconName="log-in"
          onPress={handleCreateAccount}
          title="Criar uma conta"
          color={theme.colors.background_button}
        />
      </Footer>
    </>
  );
}