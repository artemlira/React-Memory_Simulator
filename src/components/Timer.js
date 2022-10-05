import React, { useState, useEffect } from 'react'

export default function Timer({ selectLevel }) {

  const [timer, setTimer] = useState(30);
  
  useEffect(() => {
    const interval = setInterval(() => {
      selectLevel &&
        setTimer((timer) => (timer >= 1 ? timer - 1 : 0))
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [selectLevel]);


  return (
    <div className='timer'>00:{timer > 9 ? timer : `0${timer}`}</div>
  )
}
