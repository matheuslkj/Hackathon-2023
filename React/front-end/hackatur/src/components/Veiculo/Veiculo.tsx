import React, { useState } from 'react';
import {
  VeiculoInfo,
  VeiculoDetail,
  ModalContainer,
  ModalTitle,
  ModalText,
  ButtonContainer,
  ComprarButton,
  AgendarButton,
  CancelarButton,
} from '../Card/styles';




export interface Veiculo {
  id: string;
  rota: string;
  placa: string;
  descrição: string;
  assento: number;
  transportadora: string;
  localPartida: string;
  destino: string;
  saida: string;
  chegada: string;
  nome: string;
  endereço: string;
  telefone: string;
  email: string;
  sitio: string;
}

const VeiculoCard: React.FC<{ veiculo: Veiculo }> = ({ veiculo }) => {
  const [showModal, setShowModal] = useState(false);
  const [agendado, setAgendado] = useState(false);
  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleComprarPassagem = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCompraConfirmada = () => {
    console.log('Compra realizada com sucesso!');
    setCompraRealizada(true);
    closeModal();
  };

  const handleCancelarCompra = () => {
    setCompraRealizada(false);
    closeModal();
  };

  const handleAgendarPassagem = () => {
    setAgendado((prevState) => !prevState);
  };

  return (
    <div>
      <VeiculoInfo>
        <VeiculoDetail>
          <strong>Rota:</strong> {veiculo.rota}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Descriçao:</strong> {veiculo.descrição}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Placa:</strong> {veiculo.placa}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Assento:</strong> {veiculo.assento}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Transportadora:</strong> {veiculo.transportadora}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Local de Partida:</strong> {veiculo.localPartida}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Destino:</strong> {veiculo.destino}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Saída:</strong> {veiculo.saida}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Chegada:</strong> {veiculo.chegada}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Nome:</strong> {veiculo.nome}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Endereço:</strong> {veiculo.endereço}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Telefone:</strong> {veiculo.telefone}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Email:</strong> {veiculo.email}
        </VeiculoDetail>
        <VeiculoDetail>
          <strong>Sitio:</strong> {veiculo.sitio}
        </VeiculoDetail>
        <VeiculoDetail>
          <AgendarButton agendado={agendado} onClick={handleAgendarPassagem}>
            {agendado ? 'Desagendar Passagem' : 'Agendar Passagem'}
          </AgendarButton>
          <ComprarButton onClick={handleComprarPassagem} compraRealizada={compraRealizada}>
            {compraRealizada ? 'Passagem Comprada' : 'Comprar Passagem'}
          </ComprarButton>
        </VeiculoDetail>
      </VeiculoInfo>

      <ModalContainer show={showModal}>
        <ModalTitle>
          {compraRealizada ? 'Passagem Comprada com Sucesso!' : 'Compra de Passagem'}
        </ModalTitle>
        {compraRealizada ? (
          <ModalText>Você comprou uma passagem para {veiculo.destino} no veículo {veiculo.descrição}.</ModalText>
        ) : (
          <ModalText>
            Deseja confirmar a compra da passagem para {veiculo.destino} no veículo {veiculo.descrição}?
          </ModalText>
        )}
        <ButtonContainer>
          <ComprarButton onClick={handleCompraConfirmada} disabled={compraRealizada} compraRealizada={compraRealizada}>
            {compraRealizada ? 'Passagem Comprada' : 'Comprar Passagem'}
          </ComprarButton>
          <CancelarButton onClick={handleCancelarCompra}>Cancelar</CancelarButton>
        </ButtonContainer>
      </ModalContainer>
    </div>
  );
};

export default VeiculoCard;
