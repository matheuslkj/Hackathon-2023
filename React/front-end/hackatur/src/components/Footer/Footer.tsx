import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--detalhes);
  color: #fff;
  padding: 20px;
  text-align: center;
  bottom: 0;
  height: 50px;
  margin-top: 20px;

  p {
        text-align: center;
        color: #fff;
        font-size: 20px;
    }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Desenvolvido por Felipe, Matheus e Thales</p>
    </FooterContainer>
  );
};

export default Footer;
