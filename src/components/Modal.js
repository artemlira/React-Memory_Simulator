import React from 'react';
import '../styles/modal.scss';
import { motion, AnimatePresence } from "framer-motion"

export default function Modal({ openWindow, openVinWindow, selectLevel, setOpenVinWindow, setOpenWindow, setSelectLevel, isStartGame, setTime, timer }) {

  const variant = {
    hidden: {
      opacity: 0,
      translateY: 100

    },
    visible: {
      opacity: 1,
      translateY: 0
    }
  }

  const assignLevel = (num) => {
    setSelectLevel(num);
    setOpenWindow(null);
  }

  const closeVinWindow = () => {
    setSelectLevel(0);
    setOpenVinWindow(null);
  }

  const nextLevel = ({ title, count }) => {
    if (count === 4) {
      setSelectLevel({ title: 2, count: 6 });
      isStartGame(false);
      setTime(timer);
    }
    if (count === 6) {
      setSelectLevel({ title: 3, count: 9 });
      isStartGame(false);
      setTime(timer);
    }

    setOpenVinWindow(null);
  }

  return (
    <AnimatePresence>
      {
        (openWindow || openVinWindow) && (
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
              variants={variant}
              initial='hidden'
              animate='visible'
              exit='hidden'
              transition={{
                duration: 0.3,
                delay: 0.3,
                type: 'spring',
                dumpig: 10,
              }}
            >
              {!openVinWindow ?
                (
                  <>
                    <h3 className='title'>Рівень складності</h3>
                    <ul className='level__items'>
                      <li
                        className='level__item'
                        onClick={() => assignLevel({ title: 1, count: 4 })}
                      >Легкий 2 x 2</li>
                      <li
                        className='level__item'
                        onClick={() => assignLevel({ title: 2, count: 6 })}
                      >Середній 3 x 2</li>
                      <li
                        className='level__item'
                        onClick={() => assignLevel({ title: 3, count: 9 })}
                      >Складний 3 x 3</li>
                    </ul>
                  </>
                ) :
                <>
                  <h3 className='title'>Привітання</h3>
                  <div className="vin">
                    <p className="vin__text">Вітаю, ти виграв!!!</p>
                    <ul className='vin__items'>
                      <li
                        className="vin__nextlevel"
                        onClick={() => nextLevel(selectLevel)}
                      >Слідуючий рівень</li>
                      <li
                        className="vin__close"
                        onClick={() => closeVinWindow()}
                      >Закрити</li>
                    </ul>
                  </div>
                </>
              }

            </motion.div>
          </motion.div>
        )
      }

    </AnimatePresence>
  )
}
