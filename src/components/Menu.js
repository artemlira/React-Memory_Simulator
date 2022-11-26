import React, { useContext } from 'react';
import { GameContext } from './Context';
import { images } from './ImagesDB';
import MenuItem from './MenuItem';
// import { TranslateDB } from './TranslateDB';


export default function Menu() {
  const data = useContext(GameContext);
  const labels = { ...data.translate };

  return (
    <ul className='menu__items'>
      <MenuItem
        image={images[0]}
        title={labels.menuItemSetting}
        url='/settings'
      />

      <MenuItem
        image={images[1]}
        title={labels.menuItemLevel}
        url='/'
      />
      <MenuItem
        image={images[2]}
        title={labels.menuItemRating}
        url='/rating'
      />

    </ul>
  )
}
