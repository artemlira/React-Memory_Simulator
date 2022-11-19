import React, { useContext } from 'react';
import '../styles/rating.scss';
import RatingItem from './RatingItem';
import { GameContext } from './Context';



export default function Rating() {

  const data = useContext(GameContext);
  return (
    <>
      <div className='rating__head'>Кращий результат</div>
      <ol className="rating__items">
        {data.renderGameReting.map(item => <RatingItem
          key={item.id}
          {...item}
        />)}
      </ol>
    </>
  )
}
