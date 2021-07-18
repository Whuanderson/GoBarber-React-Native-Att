import React from 'react';
import { Platform } from '@unimodules/react-native-adapter';

import { api } from '../../services/api';

import logoImg from '../../assets/logo.png'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Alert
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

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  email: Yup
    .string()
    .required('Email é obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup
    .string()
    .required('Senha obrigatória'),
});

export function SignUp() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleSigUp(form: FormData) {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password
    }
    console.log(data)
    await api.post('/users', {data})
    .then(() => {
      Alert.alert('Cadastro realizado com sucesso!',
      'Você já pode fazer login na aplicação',
    );
      navigation.navigate('SignIn');
    })
    .catch(() => {
      Alert.alert('Erro', 'Occorreu algum erro')
    }) 
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
              error={errors.name && errors.name.message}
            />
            <Input
              name="email"
              control={control}
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              error={errors.email && errors.email.message}
            />
            <Input
              name="password"
              control={control}
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              error={errors.password && errors.password.message}
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