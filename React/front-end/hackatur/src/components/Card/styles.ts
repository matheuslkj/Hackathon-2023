import styled from "styled-components";

export const Card = styled.div`
    grid-gap: 15px 15px;
    width: 200;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    flex-wrap: wrap;

    .card {
        background-color: var(--box);
        opacity: 0.9;
        width: 220px;
        height: 400px;
        display: grid;
        place-items: center;
    }

    .circulo {
        background-color: var(--detalhes);
        width: 120px;
	    height: 120px;
	    border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
	    transition: 0.3s ease;

        &:hover{
            transform: rotateY(180deg);
        }
    }

    .circulo img {
        width: 75px;
        height: 75px;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: -80px 0 0;
    }

    p {
        text-align: center;
        margin: -80px 0 0;
    }
`

export const VeiculoInfo = styled.div`
  background-color: white;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 80%;
  justify-content: space-between;
  color: #333;
  text-align: center;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5e5e5;
  }

`;

export const VeiculoDetail = styled.p`
  margin: 10px 0;
`;

export const ModalContainer = styled.div<{ show: boolean }>`

  position: fixed;
  width: 30%;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  z-index: 1000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const ModalTitle = styled.h2`
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 1rem;
`;

export const ModalText = styled.p`
  color: #333;
  text-align: center;
  margin-top: 1rem;
`;

export const ButtonContainer = styled.div`
  margin-left: 150px;

`;

interface ModalButtonProps {
    compraRealizada?: boolean;
    agendado?: boolean;
    // outras propriedades, se houver
  }
export const ModalButton = styled.button<ModalButtonProps>`
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;

`;

export const ComprarButton = styled(ModalButton)`
  background-color: ${(props) => (props.compraRealizada ? '#4CAF50' : '#0000ff')};
  color: #fff;
`;

export const AgendarButton = styled(ModalButton)`
  background-color: ${(props) => (props.agendado ? '#4CAF50' : '#ff0000')};
  color: #fff;
  margin-bottom: 30px;
  margin-top: -10px;
  text-align: center;
  margin-top: 1rem;

`;

export const CancelarButton = styled(ModalButton)`
  background-color: #ff0000;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
`;

