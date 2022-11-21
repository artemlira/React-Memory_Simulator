import React, { useContext } from 'react';
import '../styles/rating.scss';
import RatingItem from './RatingItem';
import { GameContext } from './Context';
import { TranslateDB } from './TranslateDB';


export default function Rating() {

  const data = useContext(GameContext);
  return (
    <>
      <div className='rating__head'>{data.language && TranslateDB[data.language].ratingTitle}</div>
      <ol className="rating__items">
        {data.renderGameReting.map(item => <RatingItem
          key={item.id}
          {...item}
        />)}
      </ol>
    </>
  )
}
