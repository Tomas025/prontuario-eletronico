// components/Header.tsx
import React from 'react';

import UserComponent from '../../components/NavBar/PerfilComponente/UserComponent';
import MenuComponent from '../../components/NavBar/MenuComponente/MenuComponent';

const Header = () => {
  return (
    <header>
      {/* Perfil do Usuário */}
      <UserComponent />
      {/* Menu de Navegação */}
      <MenuComponent />
    </header>
  );
};

export default Header;
