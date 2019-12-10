import React, { useState } from 'react';

import { StatusBar, Platform } from 'react-native';

import {
  Container,
  Header,
  HeaderTitle,
  Menu,
  MenuItem,
  MenuItemTitle,
  Input,
  SubmitButton,
  SubmitButtonTitle
} from './LoginStyle';

const Page = () => {

  const [activeMenu, setActiveMenu] = useState('signin');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#3574CB"
        hidden={false}
        animated={true}
      ></StatusBar>
      <Header>
        <HeaderTitle>Uber</HeaderTitle>
      </Header>

      <Menu>
        <MenuItem
          active={activeMenu === 'signin'}
          onPress={() => setActiveMenu('signin')}
          underlayColor="transparent"
        >
          <MenuItemTitle>Login</MenuItemTitle>
        </MenuItem>
        <MenuItem
          active={activeMenu === 'signup'}
          onPress={() => setActiveMenu('signup')}
          underlayColor="transparent"
        >
          <MenuItemTitle>Cadastrar</MenuItemTitle>
        </MenuItem>
      </Menu>

      {activeMenu === 'signup' &&
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Nome"
          placeholderTextColor="#999999"
          autoCapitalize="words"
        ></Input>
      }
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor="#999999"
        keyboardType="email-address"
        autoCapitalize="none"
      ></Input>

      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        placeholderTextColor="#999999"
        keyboardType=""
      ></Input>

      {activeMenu === 'signin' &&
        <SubmitButton>
          <SubmitButtonTitle>Login</SubmitButtonTitle>
        </SubmitButton>
      }

      {activeMenu === 'signup' &&
        <SubmitButton>
          <SubmitButtonTitle>Cadastrar</SubmitButtonTitle>
        </SubmitButton>
      }

    </Container>
  )
}

export default Page;