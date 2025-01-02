import React from 'react';
import styles from './cards.module.css';

const KarmaCard = () => {
  return (
    <div className={styles.card}>
      <h1>Karma Yoga</h1>
      <div className={styles.content}>Shlokas will be displayed here</div>
      <div className={styles.buttons}> 
        <button>Backward</button>
        <button>Forward</button>
      </div>
    </div>
  );
};

export default KarmaCard;