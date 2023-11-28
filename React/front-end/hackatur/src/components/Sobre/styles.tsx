// src/HeaderStyles.ts

import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 200px; /* Ajuste a altura conforme necessário */
`;

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto; 
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  border-radius: 10px; 
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const Header = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

export const TeamMember = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }

  p {
    color: #666;
  }
`;
