import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from './context/ModalContext';
import styles from './Modal.module.css';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <dialog className={styles.modal} open={isOpen}>
        {children}
      </dialog>
    </ModalContext.Provider>,
    document.body
  );
};