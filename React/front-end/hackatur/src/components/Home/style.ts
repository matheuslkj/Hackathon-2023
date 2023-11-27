// styles.ts
import styled from 'styled-components';

export const Tabela = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  margin: auto;
  margin-top: -645px;
  background-color: var(--box);
  opacity: 0.9;
  margin-bottom: 30px;
  width: 700px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
`

export const AppContainer = styled.tbody`
  padding: 20px;
`;

export const RotasContainer = styled.tr`
  td {
    border: 1px solid;
    padding: 10px;
    text-align: center;
    width: 120px;
    font-weight: bold;
  }
`;

export const StyledVeiculo = styled.tr`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  background-color: #fff; /* Adicionado o fundo branco */
  &:hover {
    background: var(--box);
  }
`;

export const VeiculoContent = styled.td`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  width: 120px;
`;

export const VerDetalhesButton = styled.td`
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  width: 120px;

  button{
    background-color: var(--detalhes);
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
`;

// End of styles.ts