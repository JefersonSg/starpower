import React from 'react';
// import Planetas from './Planetas';
import styles from './SistemaSolar.module.css';

const SistemaSolar = () => {
  return (
    <div className={styles.imagens}>
      <img
        src="/Area1/espaço.png"
        alt="Simbolo do infinito como rastro de um foguete"
      />
      {/* <img className={styles.foguete} src="/Area1/Foguete.png" alt="Foguete" /> */}
      {/* <img className={styles.estrela} src="/Area1/star.png" alt="Estrela" /> */}
      {/* <div>
        <Planetas text="Análise" img="/Area1/planetas/terra.png" />
        <Planetas text="Tendências" img="/Area1/planetas/saturno.png" />
        <Planetas
          text="Monitoramento
        de Métricas"
          img="/Area1/planetas/jupiter.png"
        />
        <Planetas
          text="Calendário
        de conteudo"
          img="/Area1/planetas/venus.png"
        />
        <Planetas text="Site" img="/Area1/planetas/marte.png" />
      </div> */}
    </div>
  );
};

export default SistemaSolar;
