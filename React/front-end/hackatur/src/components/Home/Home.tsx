// Home.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VeiculoModal from '../Modal/Modal';
import * as styles from './style';
import { Veiculo } from '../Veiculo/Veiculo';

const Home: React.FC = () => {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [selectedVeiculo, setSelectedVeiculo] = useState<Veiculo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Transporte');
        console.log(response.data);
        setVeiculos(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleVeiculoClick = (veiculo: Veiculo) => {
    setSelectedVeiculo(veiculo);
  };

  const closeModal = () => {
    setSelectedVeiculo(null);
  };

  const handleVerDetalhes = (veiculo: Veiculo) => {
    setSelectedVeiculo(veiculo);
  };

  return (
    <div>
      <styles.RotasContainer>
        <h2>Rotas Disponíveis</h2>
      </styles.RotasContainer>
      <styles.AppContainer>
        {veiculos.map((veiculo) => (
          <styles.StyledVeiculo key={veiculo.id} onClick={() => handleVeiculoClick(veiculo)}>
            <styles.VeiculoContent>
              <span>{veiculo.descrição}</span>
              <styles.VerDetalhesButton onClick={() => handleVerDetalhes(veiculo)}>
                Ver Mais Detalhes
              </styles.VerDetalhesButton>
            </styles.VeiculoContent>
          </styles.StyledVeiculo>
        ))}
      </styles.AppContainer>
      {selectedVeiculo && (
        <VeiculoModal veiculo={selectedVeiculo} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
