import style from './Exchange.module.scss'
import img1 from "../../../../assets/images/Exchange1.png"
import img2 from "../../../../assets/images/Exchange2.png"
import img3 from "../../../../assets/images/Exchange3.png"
import img4 from "../../../../assets/images/Exchange4.png"




const Exchange = () => {
  return (
    <>
      <div className="container">
        <div className={style.Exchange}>
          <h2>Биржи, где можно покупать и продать</h2>
          <div className={style.Exchanges}>
            <div className={style.ExchangeBlock}>
              <img src={img1} alt="" />
              <p>Pancakeswap</p>
            </div>
            <div className={style.ExchangeBlock2}>
              <img src={img2} alt="" />
              <p>Latoken</p>
            </div>
            <div className={style.ExchangeBlock2}>
              <img src={img3} alt="" />
              <p>whitebit</p>
            </div>
            <div className={style.ExchangeBlock2}>
              <img src={img4} alt="" />
              <p>coinsbit.io</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exchange