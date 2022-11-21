import React, { useContext } from 'react';
import { GameContext } from './Context';
import { images } from './ImagesDB';
import MenuItem from './MenuItem';
import { TranslateDB } from './TranslateDB';


export default function Menu() {
  const data = useContext(GameContext);

  return (
    <ul className='menu__items'>
      <MenuItem
        image={images[0]}
        title={data.language && TranslateDB[data.language].menuItemSetting}
        url='/settings'
      />

      <MenuItem
        image={images[1]}
        title={data.language && TranslateDB[data.language].menuItemLevel}
        url='/'
      />
      <MenuItem
        image={images[2]}
        title={data.language && TranslateDB[data.language].menuItemRating}
        url='/rating'
      />

    </ul>
  )
}
