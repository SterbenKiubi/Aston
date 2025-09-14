import React from 'react';
import { useModal } from './hooks/useModal';
import styles from './Modal.module.css';

export const ModalFooter = ({ children }) => {
    const { onClose } = useModal();
  return <div className={styles.modalFooter}>
    {children}
    <button 
            className={styles.modalClose} 
            onClick={onClose}
          >
            Закрыть
          </button>
    </div>;
};