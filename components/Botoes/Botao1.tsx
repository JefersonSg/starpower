import React from 'react';
import styles from './Botao1.module.css';

interface button {
  text: string;
  image?: string;
}

const Botao1 = ({ text, image }: button) => {
  return (
    <button className={styles.botao}>
      <img src={image} alt="" />
      <p>{text}</p>
    </button>
  );
};

export default Botao1;
