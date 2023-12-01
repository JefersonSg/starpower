import React from 'react';
import styles from './Botao1.module.css';

interface button {
  text: string;
  image?: string;
}

export default function Botao1({ text, image }: button) {
  return (
    <button className={styles.botao}>
      <img src={image} alt={`foto do botão ${text}`} />
      <p>{text}</p>
    </button>
  );
}
