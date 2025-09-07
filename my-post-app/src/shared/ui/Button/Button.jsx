import React from 'react';
import styles from './Button.module.css';

const Button = ({ showModal }) => {
  return (
    <button className={styles.button} onClick={showModal}>
      Показать модальное окно
    </button>
  );
};

export default Button;