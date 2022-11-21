import React, { useContext, createRef } from 'react';
import '../styles/settimgs.scss';
import { GameContext } from './Context';
import { TranslateDB } from './TranslateDB';


export default function Settings() {
  const data = useContext(GameContext);
  const t = createRef();

  return (
    <>
      <h2>{data.language && TranslateDB[data.language].settingsTitle}</h2>
      <div className="timeRange">
        <p>{data.language && TranslateDB[data.language].howMuchTime}</p>
        <span>{data.timerRange} {data.language && TranslateDB[data.language].unit}</span>
        <input
          type="range"
          min='5'
          max='60'
          ref={t}
          value={data.timerRange}
          onInput={() => data.setTimerRange(t.current.value)}
        />
      </div>
      <div className="language__setting">
        <p>{data.language && TranslateDB[data.language].ChoosingLanguage}</p>
        <ul className="language__items">
          <li className="language__item"
            onClick={() => data.setLanguage('en')}
          >{data.language && TranslateDB[data.language].langEn}</li>
          <li className="language__item"
            onClick={() => data.setLanguage('ua')}
          >{data.language && TranslateDB[data.language].langUa}</li>
        </ul>
      </div>

    </>
  )
}
