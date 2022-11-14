import React, { useContext } from "react"
// import { GameContext } from './Context';

export default function Timer({ minutes, seconds }) {
  // const data = useContext(GameContext);


  return (
    <div className='timer'>
      {minutes > 9 ? minutes : `0${minutes}`}
      :
      {seconds > 9 ? seconds : `0${seconds}`}
    </div>
  )
}
