import React, { useContext } from 'react';
import '../styles/modal.scss';
import { motion, AnimatePresence } from "framer-motion"
import { GameContext } from './Context';

export default function Modal() {
  const data = useContext(GameContext);

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
    data.setSelectLevel(num);
    data.setOpenWindow(null);
    data.isStartGame(false);
    data.setTime(data.timer);
  }

  const closeVinWindow = () => {
    data.setSelectLevel(0);
    data.setOpenVinWindow(null);
  }

  return (
    <AnimatePresence>
      {
        (data.openWindow || data.openVinWindow) && (
          <motion.div
            className='overlay'
            onClick={() => {
              data.openWindow && data.setOpenWindow(null);
              data.openVinWindow && closeVinWindow();
            }}
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
              {!data.openVinWindow ?
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
                    <p className="vin__text">Вітаю, в тебе чудова пам'ять. Ти пройшов цей рівень за {data.playerTime} секунд!!!</p>
                    <ul className='vin__items'>
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
