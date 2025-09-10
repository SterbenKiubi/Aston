import React, { useState } from 'react';
import { Button } from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';
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
        <header className={styles.header}>
            <h1>Приложение с постами</h1>
            <nav>
                <Button showModal={openModal} />
                <ThemeSwitcher />
            </nav>
            <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
        </header>
    );
};