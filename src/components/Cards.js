import React from 'react';
import CardDefined from './cardsDefinition';
import styles from './cards.module.css';

const Cards = () => {
  return (
    <div className={styles.cardContainer}>
      <CardDefined title="Karma Yoga" content="Shlokas will be displayed here"/>
      <CardDefined title="Gyaan Yoga" content="Shlokas will be displayed here"/>
      <CardDefined title="Bhakti Yoga" content="Shlokas will be displayed here"/>
    </div>
  );
};

export default Cards;