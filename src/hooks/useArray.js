import { useState, useEffect } from 'react';
import { pics } from '../components/ImagesDB';


export default function useArray(n) {

  const [gameLevel, setGameLevel] = useState([]);
  const [gameFloor, setGameFloor] = useState([]);
  const [allUniquePicture, setAllUniquePicture] = useState([]);
  let uniqueSetNumbers = [];


  for (let i = 0; uniqueSetNumbers.length < n; i++) {
    let num = Math.floor(Math.random() * pics.length);
    if (!uniqueSetNumbers.includes(num)) {
      uniqueSetNumbers.push(num);
    }
  }

  const sortable = (a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  }

  useEffect(() => {

    setGameLevel(uniqueSetNumbers.map((item, index) => {
      return { id: index, elem: pics[item] };
    }));

    setGameFloor(uniqueSetNumbers.map((item, index) => {
      return { id: index, elem: null };
    }));

    setAllUniquePicture(uniqueSetNumbers.sort(sortable).map((item, index) => {
      return { id: index, elem: pics[item] }
    }));

  }, [n]);


  return [gameLevel, setGameLevel, gameFloor, setGameFloor, allUniquePicture];
}
