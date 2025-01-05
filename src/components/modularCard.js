import React from 'react';
import styles from './cards.module.css';

const CardDefined = ({ title, content, onPrevious, onNext }) => {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <div className={styles.content}>{content}</div>
      <div>
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default CardDefined;