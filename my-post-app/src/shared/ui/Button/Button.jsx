import React from 'react';
import './Button.css'

const Button = ({ showModal }) => {
  return (
    <button className='button' onClick={showModal}>
      Показать модальное окно
    </button>
  );
};

export default Button;