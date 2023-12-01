import React from 'react';
import styles from './Area1.module.css';
import SistemaSolar from './SistemaSolar';

function Area1() {
  return (
    <section className={styles.area1}>
      <h1 className="titulo2">
        Viaje comigo e veja como é <br /> a jornada
      </h1>
      <SistemaSolar />
      <h3 className="subtitulo">
        GERENCIAMENTO
        <br />
        DO SEU PROJETO
      </h3>
    </section>
  );
}

export default Area1;
