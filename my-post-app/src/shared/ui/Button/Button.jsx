import React from 'react';
import styles from './Button.module.css';

export const Button = ({ showModal }) => {
  return (
    <button className={styles.button} onClick={showModal}>
      Показать модальное окно
    </button>
  );
};