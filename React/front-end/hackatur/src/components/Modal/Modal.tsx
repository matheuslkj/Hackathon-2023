import React from 'react';
import {ModalOverlay, ModalContent, CloseButton} from './styles';
import { Veiculo } from '../Veiculo/Veiculo';



const VeiculoModal: React.FC<{ veiculo: Veiculo; onClose: () => void }> = ({ veiculo, onClose }) => (
  <ModalOverlay onClick={onClose}>
    <ModalContent>
      <h2>{veiculo.descrição}</h2>
      <br />
      <p><strong>Rota:</strong> {veiculo.rota}</p>
      <p><strong>Placa:</strong> {veiculo.placa}</p>
      <p><strong>Transportadora:</strong> {veiculo.transportadora}</p>
      <p><strong>Local de Partida:</strong> {veiculo.localPartida}</p>
      <p><strong>Destino Final:</strong> {veiculo.destino}</p>
      <p><strong>Saida:</strong> {veiculo.saida}</p>
      <p><strong>Chegada:</strong> {veiculo.chegada}</p>
      <p><strong>Endereço:</strong> {veiculo.endereço}</p>
      <p><strong>Telefone:</strong> {veiculo.telefone}</p>
      <p><strong>E-mail:</strong> {veiculo.email}</p>
      <p><strong>Site:</strong> {veiculo.sitio}</p>
      <br />
      <CloseButton onClick={onClose}>Fechar Modal</CloseButton>
    </ModalContent>
  </ModalOverlay>
);

export default VeiculoModal;
