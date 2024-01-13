import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from '../ButtonBack/ButtonBack.module.css';

export const ButtonBack = () => {
  const location = useLocation();
  const defaultHref = location.state.from || location.state.movieList;

  return (
    <Link to={defaultHref} className={styles.btnBack}>
      Go back
    </Link>
  );
};