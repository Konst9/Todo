import React from 'react';
import logo from "../../../app/icons/logo.svg";
import { HBlock, LogoBlock, Logo, AuthBlock, Text } from "./header.styles";

export function Header() {
  return (
    <HBlock>
      <LogoBlock>
        <Logo src={logo} alt="логотип" />
        <Text>TODO List</Text>
      </LogoBlock>
      <AuthBlock>
        <Text>Войти</Text>
        <Text>Зарегистрироваться</Text>
      </AuthBlock>
    </HBlock>
  );
}
