import React, { useContext } from "react"
import { GameContext } from './Context';

export default function Timer() {
  const data = useContext(GameContext);

  return (
    <div className='timer'>
      {data.minutes > 9 ? data.minutes : `0${data.minutes}`}
      :
      {data.seconds > 9 ? data.seconds : `0${data.seconds}`}
    </div>
  )
}
