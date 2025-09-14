import React from 'react';
import styles from './Modal.module.css';

export const ModalHeader = ({ children }) => {

  return (
    <div className={styles.modalHeader}>
      <h3 className={styles.modalTitle}>{children}</h3>
    </div>
  );
};