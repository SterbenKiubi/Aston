import React from "react";
import Button from '../../shared/ui/Button/Button';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Приложение с постами</h1>
            <nav>
                <Button />
            </nav>
        </header>
    );
};

export default Header;