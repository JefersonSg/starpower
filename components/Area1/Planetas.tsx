import React from 'react';
import styles from './Planet.module.css';

interface planet {
  text: string;
  img: string;
}

function Planetas({ text, img }: planet) {
  return (
    <div className={styles.planet}>
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default Planetas;
