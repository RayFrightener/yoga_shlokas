import React from 'react';
import styles from './context.module.css';

const Context = () => {
  return (
    <div className={styles.contextContainer}>
      <p className={styles.context}>
        Bhagavad Gita, which translates to "God's Song," is a scriptural text that is over 5000 years old. 
        These verses are believed to be directly spoken by God to liberate the listener from all delusions 
        and impart direct knowledge of reality.
      </p>
      <p className={styles.context}>
        From the text, I've extracted verses from Chapter 3, Chapter 4, and Chapter 12. These particular verses 
        broadly fall under the Yogas of Karma, Knowledge, and Bhakti respectively.
      </p>
      <p className={styles.context}>
        Yoga means unionizing. To understand it properly, imagine the act of doing and the doer becoming one, 
        the knowledge of the truth and the seeker becoming one, and the love and the lover becoming one.
        Yoga is the constant union in reality, where all that remains is one whole.
      </p>
      <p className={styles.context}>
        Karma means action or doing. Gyaan means knowledge or knowing. Bhakti means devotion or love.
        So, Karma Yoga would mean the union achieved through actions. Gyaan Yoga would mean the union achieved 
        through knowledge, and Bhakti Yoga would mean the union achieved through love or devotion.
      </p>
      <p className={styles.context}>
        Based on this knowledge, you can now understand what these verses mean. 
        Essentially, verses under Karma Yoga are the knowledge imparted by God about Karma Yoga.
      </p>
    </div>
  );
};

export default Context;