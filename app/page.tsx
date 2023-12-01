import Image from 'next/image';
import styles from './page.module.css';
import Header from '../components/header/Header';
import Area1 from '../components/Area1/Area1';
import Area2 from '../components/Area2/Area2';
import Area3 from '../components/Area3/Area3';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Area1 />
        <Area2 />
        <Area3 />
      </main>
    </>
  );
}
