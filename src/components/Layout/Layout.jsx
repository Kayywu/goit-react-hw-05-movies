import React from 'react';

import styles from '../Layout/Layout.module.css';
import { Link } from './Active.styled';

export const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.wraper}>
        <nav className={styles.nav}>
          <Link to="/" end className={styles.link}>
            Home
          </Link>
          <Link to="/movies" className={styles.link}>
            Movies
          </Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
};