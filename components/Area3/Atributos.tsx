import Image from 'next/image';
import React from 'react';

interface atribute {
  img: string;
  title: string;
  text: string;
}

const Atributos = ({ img, title, text }: atribute) => {
  return (
    <li>
      <Image
        src={img + '.png'}
        alt={'imagem do atributo ' + title}
        width={148}
        height={148}
      />
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};

export default Atributos;
