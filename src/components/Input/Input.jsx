import React from 'react';
import styles from '../Input/Input.module.css';

export const Input = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchQuery = form.elements.search.value;
    form.reset();
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        className={styles.input}
      />
      <button type="submit" className={styles.btnSearch}>
        Search
      </button>
    </form>
  );
};