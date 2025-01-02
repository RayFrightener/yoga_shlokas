import React from 'react';
import styles from './cards.module.css';

const CardDefined = ({ title, content }) => {
  return (
    <div className={styles.card}> 
      <h1>{title}</h1>
      <div className={styles.content}>{content}</div>
        <div> 
          <button>Previous</button>
          <button>Next</button>
        </div> 
    </div>
  );
};

export default CardDefined;