import React from 'react';
import { images } from './ImagesDB';
import MenuItem from './MenuItem';

export default function Menu() {

  return (
    <ul className='menu__items'>
      <MenuItem image={images[0]} title="Налаштування" />
      <MenuItem image={images[1]} title="Рівень" />
      <MenuItem image={images[2]} title="Рейтинг" />
    </ul>
  )
}
