import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
    return ReactDOM.createPortal(
    <dialog className={styles.modal} open={isOpen}>
      <div>
            <h3>О проекте</h3>
            <p>Приложение для просмотра постов</p>
            <button onClick={onClose}>Закрыть</button>
        </div>
    </dialog>,
    document.body
  );
};

export default Modal;