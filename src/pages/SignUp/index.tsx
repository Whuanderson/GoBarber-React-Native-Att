import React, { useRef, useState } from 'react';
import { Platform } from '@unimodules/react-native-adapter';

import { api } from '../../services/api';

import logoImg from '../../assets/logo.png'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';

import * as Yup from 'yup';

import { theme } from '../../global/styles/theme';
import { useNavigation, useRoute } from '@react-navigation/native';

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

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .required('Senha é obrigatória'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),
        name: Yup.string()
          .required('Nome é obrigatório'),
      })

      const data = { name, email, password }      
      await schema.validate(data);

      console.log(data)
      
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Erro', error.message)
      }      
    }

    await api.post("/users", { //não está funcionando o post na api
      name,
      email,
      password,        
    }).then(() => {
      navigation.navigate('SignIn')
      Alert.alert('Parabens!', 'Cadastro realizado com sucesso')
    })
    .catch((error) => {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível concluir o cadastro.')
    });
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
              iconName="user"
              placeholder="Nome"
              autoCapitalize="words"
              value={name}
              onChangeText={setName}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              value={password}
              onChangeText={setPassowrd}
            />

            <Button
              title="Cadastrar"
              onPress={handleRegister}
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
          onPress={handleBack}
          title="Voltar para o login"
          color={theme.colors.branco_texto}
        />
      </Footer>
    </>
  );
}