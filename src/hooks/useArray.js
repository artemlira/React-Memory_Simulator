import { pics } from '../components/ImagesDB';

export default function useArray(n) {

  let arr = [];
  let userLevel = [];
  let uniqueSetNumbers = [];

  for (let i = 0; uniqueSetNumbers.length < n; i++) {
    let num = Math.floor(Math.random() * pics.length);
    if (!uniqueSetNumbers.includes(num)) {
      uniqueSetNumbers.push(num);
    }
  }

  uniqueSetNumbers.forEach((item, index) => {
    let c = { id: index, elem: pics[item] };
    arr.push(c);
  });

  for (let i = 0; i < n; i++) {
    let c = { id: i, elem: null };
    userLevel.push(c);
  }

  return [arr, userLevel];
}
