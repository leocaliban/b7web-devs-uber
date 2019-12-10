import React, { useState } from 'react';

import { StatusBar, Platform } from 'react-native';
import useDevsUberApi from '../../useDevsUberApi';

import { connect } from 'react-redux';

import { StackActions, NavigationActions } from 'react-navigation';

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

const Page = (props) => {
  const api = useDevsUberApi();

  const [activeMenu, setActiveMenu] = useState('signin');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (email && password) {
      const response = await api.signin(email, password);

      if (response.error) {
        alert(response.error);
      } else {
        props.setToken(response.token);
        props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'HomeStack' })
          ]
        }));
      }
    }
  };

  async function handleSignUp() {
    if (name && email && password) {
      const response = await api.signup(name, email, password);

      if (response.error) {
        alert(response.error);
      } else {
        props.setToken(response.token);
        props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'HomeStack' })
          ]
        }));
      }
    }
  }

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
          keyboardType="name-phone-pad"
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
        secureTextEntry={true}
      ></Input>

      {activeMenu === 'signin' &&
        <SubmitButton onPress={handleSignIn}>
          <SubmitButtonTitle>Login</SubmitButtonTitle>
        </SubmitButton>
      }

      {activeMenu === 'signup' &&
        <SubmitButton onPress={handleSignUp}>
          <SubmitButtonTitle>Cadastrar</SubmitButtonTitle>
        </SubmitButton>
      }

    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.UserReducer.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({ type: 'SET_TOKEN', payload: { token } })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);