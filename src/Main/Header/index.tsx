import React from 'react';
import { Logo } from './logo';
import { HeaderContainer, PageHeader, Menu } from './styled';

const Header = () => {
  return (
    <PageHeader>
      <HeaderContainer justify="space-between" align="center">
        <Menu />
        <Logo />
        <div />
      </HeaderContainer>
    </PageHeader>
  );
};

export default Header;
