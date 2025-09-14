import React from 'react';
import styles from './Modal.module.css';

export const ModalBody = ({ children }) => {
  return <div className={styles.modalBody}>{children}</div>;
};