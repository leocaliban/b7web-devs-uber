import React, { useState } from 'react';

import {
  Container,
  Header,
  HeaderTitle,
  Menu,
  MenuItem,
  MenuItemTitle
} from './LoginStyle';

const Page = () => {

  const [activeMenu, setActiveMenu] = useState('signin');

  return (
    <Container>
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
    </Container>
  )
}

export default Page;