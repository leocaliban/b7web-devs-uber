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
        <Input placeholder="Nome"></Input>
      }
      <Input placeholder="E-mail"></Input>
      <Input placeholder="Senha"></Input>

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