import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/ui/Button/Button';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../shared/ui/Modal';
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
                <Link to="/" className={styles.logoLink}>
                    <h1 className={styles.title}>Приложение с постами</h1>
                </Link>
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
                    <ModalFooter></ModalFooter>
                </Modal>
            </header>
        </>
    );
};