import React, { useContext } from 'react';
import '../styles/rating.scss';
import RatingItem from './RatingItem';
import { GameContext } from './Context';
// import { TranslateDB } from './TranslateDB';


export default function Rating() {

  const data = useContext(GameContext);
  const labels = { ...data.translate };
  return (
    <>
      <div className='rating__head'>{labels.ratingTitle}</div>
      <ol className="rating__items">
        {data.renderGameReting.map(item => <RatingItem
          key={item.id}
          {...item}
        />)}
      </ol>
    </>
  )
}
