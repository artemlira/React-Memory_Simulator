import React from 'react'
// import { pics } from './ImagesDB';
import { motion } from 'framer-motion';

export default function DetailsInner({ arr, dragStart }) {

  

  let count = arr.length;
  let template = {}

  const generateTemplate = () => {

    if (count === 0) {
      return null;
    }

    if (count === 4) {
      return template = {
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
      }
    }

    if (count === 6) {
      return template = {
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
      }
    }

    if (count === 9) {
      return template = {
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
      }
    }

    return template;
  }

  const myVariant = {
    hidden: { opacity: 0 },
    visible: (i) => {
      return ({
        opacity: 1,
        transition: {
          delay: i * 0.05
        }
      })
    }
  }


  return (
    <ul className='details__items' style={generateTemplate()}>
      {arr.map((item, index) =>
        <motion.li
          key={index}
          className='details__item'
          variants={myVariant}
          initial='hidden'
          animate='visible'
          custom={index}
        >
          <img
            src={item.elem}
            alt="element"
            draggable={true}
            style={{ cursor: "grab" }}
            onDragStart={e => dragStart(e, item, 'one')}
          />
        </motion.li>
      )}
    </ul>
  )
}
