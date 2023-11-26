// styles.ts
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
  padding: 20px;
`;

export const RotasContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledVeiculo = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff; /* Adicionado o fundo branco */
  &:hover {
    background: #f5f5f5;
  }
`;

export const VeiculoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerDetalhesButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

// End of styles.ts
