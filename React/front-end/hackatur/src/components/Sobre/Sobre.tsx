// src/AboutUs.tsx

import React from "react";
import * as Styles from "./styles";

const Sobre: React.FC = () => {
  return (
    <Styles.PageContainer>
      <h1>Sobre Nós</h1>

      <Styles.Section>
        <Styles.Header>HackaTur</Styles.Header>
        <p>
          Bem-vindo à HackaTur, sua porta de entrada para viagens que
          transcendem o ordinário. Somos mais do que uma empresa de transporte publico;
          somos contadores de histórias, arquitetos de roteiros e apaixonados
          por desvendar o inexplorado. Embarque conosco nessa jornada
          emocionante, onde cada destino é uma oportunidade para criar memórias
          inesquecíveis.
        </p>
      </Styles.Section>

      <Styles.Section>
        <Styles.Header>Entre em Contato</Styles.Header>
        <p>
          Email: HackaTur@HackaTur.com <br />
          Telefone: (44) 123-4567
        </p>
      </Styles.Section>
    </Styles.PageContainer>
  );
};

export default Sobre;
