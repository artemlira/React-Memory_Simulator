import React from 'react';
import '../styles/modal.css';
import { motion, AnimatePresence } from "framer-motion"

export default function Modal({ openWindow, setOpenWindow, setSelectLevel }) {

  const assignLevel = (num) => {
    setSelectLevel(num);
    setOpenWindow(null);
  }

  return (
    <AnimatePresence>
      {
        openWindow && (
          <motion.div
            className='overlay'
            onClick={() => setOpenWindow(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3
            }}
          >
            <motion.div
              className='modal__window'
              initial={{
                opacity: 0,
                translateY: 100
              }}
              animate={{
                opacity: 1,
                translateY: 0
              }}
              exit={{
                opacity: 0,
                translateY: -100
              }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                type: 'spring',
                dumpig: 10,
              }}
            >
              <h3 className='title'>Рівень складності</h3>
              <ul className='level__items'>
                <li
                  className='level__item'
                  onClick={() => assignLevel(1)}
                >Легкий 2 x 2</li>
                <li
                  className='level__item'
                  onClick={() => assignLevel(2)}
                >Середній 3 x 2</li>
                <li
                  className='level__item'
                  onClick={() => assignLevel(3)}
                >Складний 3 x 3</li>
              </ul>
            </motion.div>
          </motion.div>
        )
      }

    </AnimatePresence>
  )
}
