import React, { useEffect, useState } from 'react'
import CardsComponent from '@/Components/GamesComponents/Cards/CardsComponent';
import { getRandomLightColor } from '@/Helpers/generateLightRandomColors';

const AddNumbersGames = () => {
    const [answer, setAnswer] = useState(0);
    const [randomNumbersToAdd, setRandomNumbersToAdd] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [gameOver, setGameOver] = useState(false);


    useEffect(() => {
      const randomNumbersArray = [];

      for (let index = 0; index < 2; index++) {
        const randomNumber = Math.floor(Math.random() * 100);
        randomNumbersArray.push(randomNumber);
      }
  
      setRandomNumbersToAdd(randomNumbersArray);
    }, []);

    const handleCardClick = () => {
      setRandomNumbersToAdd([]);
    };

    return (
      <CardsComponent
                handleCardClick={handleCardClick}
                wordsToFind={0}
                cards={[1,2,3,4]}
                currentWordIndex={10}
                colors={Array.from({ length: 9 }, () => getRandomLightColor())}
                style={"add-numbers-game"}
            />
    )
};

export default AddNumbersGames;

