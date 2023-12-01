import React from 'react';

interface button {
  text: string;
  image?: string;
}

const Botão = ({ text }: button) => {
  return <button>{text}</button>;
};

export default Botão;
