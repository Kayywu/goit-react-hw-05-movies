import React from 'react';
import { PropTypes } from 'prop-types';


import styles from '../BtnLoadMore/BtnLoadMore.module.css';

export const BtnLoadMore = ({ onClick }) => (
  <button onClick={onClick} className={styles.btnLoad}>
    Load more
  </button>
);

BtnLoadMore.propTypes = {
  onClick: PropTypes.func,
};