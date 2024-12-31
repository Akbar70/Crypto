import React from 'react'
import style from './StartBlock.module.scss'
import img from '../../../../assets/images/Img1.png'

const StartBlock = () => {
  return (
    <div className='container'>
      <div className={style.startBlock}>
        <div className={style.textBlock}>
          <h2>Наша цель - ваша свобода</h2>
          <p>Asman Coin - это новая криптовалюта, которая представляет собой новый уровень цифровых активов. Наша криптовалюта предлагает уникальный подход к обеспечению стабильности, безопасности и приватности в мире криптовалют.</p>
        </div>
        <div className={style.Img}>
            <img src={img} alt="" />
          </div>
      </div>
    </div>
  )
}

export default StartBlock