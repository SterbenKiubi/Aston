import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from './context/ModalContext';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> & {
  Header: React.FC<{ children: React.ReactNode }>;
  Body: React.FC<{ children: React.ReactNode }>;
  Footer: React.FC<{ children: React.ReactNode }>;
} = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <dialog className={styles.modal} open={isOpen}>
        <div className={styles.modalContent}>
          {children}
        </div>
      </dialog>
    </ModalContext.Provider>,
    document.body
  );
};

// Подкомпоненты
const ModalHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.modalHeader}>
    {children}
  </div>
);

const ModalBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.modalBody}>
    {children}
  </div>
);

const ModalFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.modalFooter}>
    {children}
  </div>
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;