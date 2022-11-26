import React, { useContext, createRef } from 'react';
import '../styles/settimgs.scss';
import { GameContext } from './Context';
// import { TranslateDB } from './TranslateDB';


export default function Settings() {
  const data = useContext(GameContext);
  const t = createRef();
  const labels = { ...data.translate };

  return (
    <>
      <h2>{labels.settingsTitle}</h2>
      <div className="timeRange">
        <p>{labels.howMuchTime}</p>
        <span> {data.timerRange}</span>
        {/* <span> {data.timestampeDeclination(data.timerRange, labels.timer)}</span> */}
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
        <p>{labels.ChoosingLanguage}</p>
        <ul className="language__items">
          <li className="language__item"
            onClick={() => data.setLanguage('en')}
          >{labels.langEn}</li>
          <li className="language__item"
            onClick={() => data.setLanguage('ua')}
          >{labels.langUa}</li>
        </ul>
      </div>

    </>
  )
}
