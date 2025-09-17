import React from "react";
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ( { children } ) => {
    return (
        <div className={styles.layout}>
      <Header />
      <nav className={styles.navigation}>
        <Link 
          to="/posts" 
          className={`${styles.navLink} ${location.pathname === '/posts' ? styles.active : ''}`}
        >
          Посты
        </Link>
        <Link 
          to="/users/1/albums" 
          className={styles.navLink}
        >
          Альбомы
        </Link>
        <Link 
          to="/users/1/todos" 
          className={styles.navLink}
        >
          Задачи
        </Link>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
    );
};