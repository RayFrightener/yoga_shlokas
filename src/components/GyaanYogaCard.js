import React from 'react';
import styles from './cards.module.css';

const GyaanYogaCard = ({ verses, currentVerseIndex, onPrevious, onNext, onReset }) => {
  const currentVerse = verses[currentVerseIndex] || {};

  return (
    <div className={styles.card}>
      <h1>Gyaan Yoga</h1>
      <div className={styles.content}>
        <p>{currentVerse.text}</p>
        <p>{currentVerse.meaning}</p>
      </div>
      <div>
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onNext}>Next</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default GyaanYogaCard;