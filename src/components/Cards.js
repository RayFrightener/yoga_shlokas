import React, { useState, useEffect } from 'react';
import CardDefined from './modularCard';
import styles from './cards.module.css';

const Cards = () => {
  const [versesDocument, setVersesDocument] = useState([]);
  const [verses, setVerses] = useState([]);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  useEffect(() => {
    const fetchVersesDocument = async () => {
      try {
        const res = await fetch('/api/shlokas');
        const data = await res.json();
        console.log('Fetched document:', data); // Log the fetched document
        setVersesDocument(data);
        // Filter the chapter object from the fetched document
        const chapter3 = data.find(doc => doc.chapter === 3);
        if (chapter3) {
          const chapter3Verses = Object.values(chapter3.verses);
          setVerses(chapter3Verses);
          console.log('Updated verses state:', chapter3Verses); // Log the updated state
        } else {
          console.error('Chapter 3 not found');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchVersesDocument();
  }, []);   

  const handlePrevious = () => {
    setCurrentVerseIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentVerseIndex((prevIndex) => Math.min(prevIndex + 1, verses.length - 1));
  };

  const currentVerse = verses[currentVerseIndex] || {};

  return (
    <div className={styles.cardContainer}>
      <CardDefined 
        title="Karma Yoga" 
        content={
          <>
            <p>{currentVerse.text}</p>
            <p>{currentVerse.meaning}</p>
          </>
        }
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      <CardDefined title="Gyaan Yoga" content="Shlokas will be displayed here"/>
      <CardDefined title="Bhakti Yoga" content="Shlokas will be displayed here"/>
    </div>
  );
};

export default Cards;