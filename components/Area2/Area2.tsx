import React from 'react';
import styles from './Area2.module.css';

const Area2 = () => {
  return (
    <section className={styles.area2}>
      <span className={`${styles.separador} botão2`}>Veja na pratica</span>
      <h3 className="subtitulo">E APLICANTO TUDO ISSO</h3>
      <h1 className="titulo2">
        A gente faz o seu <br /> perfil bombar
      </h1>
      <p>
        Após uma profunda análise do seu perfil, aplicamos todas as métricas
        necessárias, com planejamento e estudo, aos poucos para criar um
        engajamento orgânico do seu perfil
      </p>
    </section>
  );
};

export default Area2;
