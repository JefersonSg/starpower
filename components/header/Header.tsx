import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import Botão from './Botão';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={'/logo.svg'}
        width={500}
        height={500}
        alt="Logo do site"
      />
      <Botão text={'Nossos serviços'} />
      <Botão text={'Nossa equipe'} />
    </header>
  );
};

export default Header;
