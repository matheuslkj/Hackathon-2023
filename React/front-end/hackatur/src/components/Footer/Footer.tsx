import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  bottom: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Desenvolvido por Felipe, Matheus e Thales</p>
    </FooterContainer>
  );
};

export default Footer;
