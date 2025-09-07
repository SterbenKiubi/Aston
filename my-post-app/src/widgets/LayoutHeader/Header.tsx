import React, { useState } from 'react';
import Button from '../../shared/ui/Button/Button';
import Modal from '../../shared/ui/Modal/Modal';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import styles from './Header.module.css'
import { log } from 'console';

const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
        console.log(!isModalOpen);
    };

    function closeModal() {
        setIsModalOpen(false);
        console.log(!isModalOpen);
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

export default Header;