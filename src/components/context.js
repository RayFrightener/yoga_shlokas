import React from 'react';
import styles from './context.module.css';

const Context = () => {
  return (
    <div className={styles.contextContainer}>
      <p className={styles.context}>
  The Bhagavad Gita, meaning "God's Song," is an ancient scripture over 5000 years old. It contains verses believed to be directly spoken by God, intended to liberate the listener from delusion and provide direct knowledge of reality.
      </p>
      <p className={styles.context}>
        From this text, I’ve selected verses from Chapters 3, 4, and 12, which broadly represent the paths of Karma Yoga, Jnana Yoga (Yoga of Knowledge), and Bhakti Yoga, respectively.
      </p>
      <p className={styles.context}>
        Yoga means union. Imagine the doer and the act becoming one, the seeker and the truth merging, or love and the lover uniting. Yoga is this constant state of union with reality, where all that remains is oneness.
      </p>
      <p className={styles.context}>
        Karma means action. Jnana means knowledge. Bhakti means devotion or love. Karma Yoga is the union achieved through selfless action, Jnana Yoga through knowledge, and Bhakti Yoga through love and devotion.
      </p>
      <p className={styles.context}>
        With this understanding, the verses from these chapters impart divine knowledge about their respective paths, guiding us toward union with the ultimate reality.
      </p>

    </div>
  );
};

export default Context;