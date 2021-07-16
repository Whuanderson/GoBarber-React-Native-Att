import React from 'react';
import { Platform } from '@unimodules/react-native-adapter';


import logoImg from '../../assets/logo.png'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';

import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

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
  name: string;
  email: string;
  password: string;
}

export function SignUp() {
  const navigation = useNavigation();  

  const {
    handleSubmit,
    control,
  } = useForm();

  function handleSigUp(form: FormData) {
    const data = {
      name: form.name,
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
              <Title>Crie sua conta</Title>
            </View>
            <Input
              name="name"
              control={control}
              iconName="user"
              placeholder="Nome"
              autoCapitalize="words"
            />
            <Input
              name="email"
              control={control}
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Input
              name="password"
              control={control}
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handleSigUp)}
            />

            <Button
              title="Cadastrar"
              onPress={handleSubmit(handleSigUp)}
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
          iconName="arrow-left"
          onPress={navigation.goBack}
          title="Voltar para o login"
          color={theme.colors.branco_texto}
        />
      </Footer>
    </>
  );
}