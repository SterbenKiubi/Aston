import React, { useState } from 'react';
import { Button } from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';
import { ModalHeader } from '../../shared/ui/Modal/Modal';
import { ModalBody } from '../../shared/ui/Modal/Modal';
import { ModalFooter } from '../../shared/ui/Modal/Modal';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    };

    function closeModal() {
        setIsModalOpen(false);
    };

    return (
        <>
            <header className={styles.header}>
                <h1>Приложение с постами</h1>
                <nav>
                    <Button showModal={openModal} />
                    <ThemeSwitcher />
                </nav>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <ModalHeader>
                        О проекте
                    </ModalHeader>
                    <ModalBody>
                        <h3>Мое приложение для просмотра постов</h3>
                        <p>На нем я учусь:</p>
                        <ul>
                            <li>React компонентам и пропсам</li>
                            <li>Compound Components паттерну</li>
                            <li>Контексту и управлению состоянием</li>
                            <li>Модальным окнам через React Portal</li>
                            <li>CSS Modules для стилизации</li>
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={closeModal}>
                            Закрыть
                        </button>
                    </ModalFooter>
                </Modal>
            </header>
        </>
    );
};