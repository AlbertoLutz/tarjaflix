import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logoTarjaFlix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="Logo Alura" />
      </a>
     
    </FooterBase>
  );
}

export default Footer;
