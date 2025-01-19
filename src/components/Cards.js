import React, { useState, useEffect } from 'react';
import KarmaYogaCard from './KarmaYogaCard';
import GyaanYogaCard from './GyaanYogaCard';
import BhaktiYogaCard from './BhaktiYogaCard';
import styles from '@components/cards.module.css'; // Updated import
import { Karma } from 'next/font/google';

const Cards = () => {
  const [versesDocument, setVersesDocument] = useState([]);
  const [ch3Verses, setCh3Verses] = useState([]);
  const [ch4Verses, setCh4Verses] = useState([]);
  const [ch12Verses, setCh12Verses] = useState([]);
  const [currentKarmaIndex, setKarmaIndex] = useState(0);
  const [currentGyaanIndex, setGyaanIndex] = useState(0);
  const [currentBhaktiIndex, setBhaktiIndex] = useState(0);

  useEffect(() => {
    const fetchVersesDocument = async () => {
      try {
        const res = await fetch('/api/shlokas');
        const data = await res.json();
        setVersesDocument(data);
        
        // Filter the chapter object from the fetched document
        const chapter3 = data.find(doc => doc['3']);
        if (chapter3) {
          const chapter3Verses = Object.values(chapter3['3']);
          setCh3Verses(chapter3Verses);
        } else {
          console.error('Chapter 3 not found');
        }

        const chapter4 = data.find(doc => doc['4']);
        if(chapter4) {
          const chapter4Verses = Object.values(chapter4['4']);
          setCh4Verses(chapter4Verses);
        } else {
          console.error('Chapter 4 not found');
        }

        const chapter12 = data.find(doc => doc['12']);
        if(chapter12){
          const chapter12Verses = Object.values(chapter12['12']);
          setCh12Verses(chapter12Verses);
        } else {
          console.error('Chapter 12 not found');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchVersesDocument();
  }, []);   


  const handlePreviousKarma = () => {
    setKarmaIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextKarma = () => {
    setKarmaIndex((prevIndex) => Math.min(prevIndex + 1, ch3Verses.length - 1));
  };

  const handleIndexResetKarma = () => {
    setKarmaIndex(0);
  };

  const handlePreviousGyaan = () => {
    setGyaanIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextGyaan = () => {
    setGyaanIndex((prevIndex) => Math.min(prevIndex + 1, ch4Verses.length - 1));
  }

  const handleIndexResetGyaan = () => {
    setGyaanIndex(0);
  }

  const handlePreviousBhakti = () => {
    setBhaktiIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  const handleNextBhakti = () => {
    setBhaktiIndex((prevIndex) => Math.min(prevIndex + 1, ch12Verses.length - 1));
  }

  const handleIndexResetBhakti = () => {
    setBhaktiIndex(0);
  }


  return (
    <div className={styles.cardContainer}>
      <KarmaYogaCard
        verses={ch3Verses}
        currentVerseIndex={currentKarmaIndex}
        onPrevious={handlePreviousKarma}
        onNext={handleNextKarma}
        onReset={handleIndexResetKarma}
      />
      <GyaanYogaCard
        verses={ch4Verses}
        currentVerseIndex={currentGyaanIndex}
        onPrevious={handlePreviousGyaan}
        onNext={handleNextGyaan}
        onReset={handleIndexResetGyaan}
        />
      <BhaktiYogaCard
        verses={ch12Verses}
        currentVerseIndex={currentBhaktiIndex}
        onPrevious={handlePreviousBhakti}
        onNext={handleNextBhakti}
        onReset={handleIndexResetBhakti}
        />    
      </div>
  );
};

export default Cards;