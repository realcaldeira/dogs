import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      Header
      <nav className={`${styles.nav} container`}>
        <Link classname={styles.logo} to="/" aria-label="Dogs - Home">
          Home
        </Link>
        <Dogs />
        <Link classname={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
