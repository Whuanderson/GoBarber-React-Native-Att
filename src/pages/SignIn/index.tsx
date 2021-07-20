import React, { useContext, useState, useRef } from 'react';
import { Platform } from '@unimodules/react-native-adapter';
import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup'

import logoImg from '../../assets/logo.png'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';

import { theme } from '../../global/styles/theme';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

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


export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

    const navigation = useNavigation();

  function handleCreateAccount() {
    navigation.navigate('SignUp')
  }

  async function handleSigIn() {
    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .required('A senha é obrigatória'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
      });

      await schema.validate({ email, password });

      signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Erro', error.message);
      } else {
        console.log(error)
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }
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
              value={email}
              onChangeText={setEmail}
              iconName="mail"
              placeholder="E-mail"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
            />
            <Input
              value={password}
              onChangeText={setPassowrd}
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
            />

            <Button
              title="Entrar"
              onPress={handleSigIn}
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