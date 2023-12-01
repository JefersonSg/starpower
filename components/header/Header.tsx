import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import Botao1 from '../Botoes/Botao1';
import { Bruno_Ace_SC } from 'next/font/google';

const font = Bruno_Ace_SC({
  weight: '400',
  subsets: ['latin']
});

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          <Image
            src={'/estrela.svg'}
            width={160}
            height={150}
            alt="Logo do site"
          />
          <h1 className="titulo">star power</h1>
          <span className={`${styles.agencia} ${font.className}`}>AGENCIA</span>
        </div>
        <div className={styles.botoes}>
          <Botao1 image="/botao/estrelaCadente.png" text={'Nossa equipe'} />
          <Botao1 image="/botao/maoAlien.png" text={'Nossos serviços'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
