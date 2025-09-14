import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const ModalContext = createContext();

export const Modal = ({ isOpen, onClose, children }) => {

  return ReactDOM.createPortal(
    <ModalContext.Provider value={ {onClose} }>
      <dialog className={styles.modal} open={isOpen}>
        {children}
      </dialog>
    </ModalContext.Provider>,
  document.body
);
};

export const ModalHeader = ({ children }) => {
  return (
    <div className={styles.modalHeader}>
      <h3 className={styles.modalTitle}>{children}</h3>
    </div>
  );
};

export const ModalBody = ({ children }) => {
  return <div className={styles.modalBody}>{children}</div>;
};

export const ModalFooter = ({ children }) => {
  return <div className={styles.modalFooter}>{children}</div>;
};