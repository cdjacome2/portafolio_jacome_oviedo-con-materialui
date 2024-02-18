import React from 'react';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const MyStyledButton = styled(Button)`
  color: white;
  background-color: green;
  &:hover {
    background-color: darkgreen;
  }
`;

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link to="/">
          <MyStyledButton>Inicio</MyStyledButton>
        </Link>
        <Link to="/projects">
          <MyStyledButton>Proyectos</MyStyledButton>
        </Link>
        <Link to="/contact">
          <MyStyledButton>Contacto</MyStyledButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;







