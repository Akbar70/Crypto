import { Copi } from '../../../../assets/icons/Copi'
import { QR } from '../../../../assets/icons/QR'
import style from './Agreement.module.scss'

const Agreements = () => {
  return (
    <div className="container">
      <div className={style.agreement}>
        <div className={style.agreements}>
          <div className={style.AgreementsWallet}>
            <div className={style.Wallet}>
              <div className={style.Wallets}>
                <p>Договор</p>
                <p className={style.Id}>0x163bb130dc98b0937001eb772ace9602b894e34e</p>
                <div className={style.WalletBtn}>
                  <Copi />
                  <QR />
                </div>
              </div>
              <div style={{ width: '905px', height: '1px', backgroundColor: '#F7F7F71A' }}></div>
            </div>
          </div>
          <div className={style.WalletsInfo}>
            <div className={style.block1}>
              <p>Общая эмиссия</p>
              <p className={style.Num}>4,200,000</p>
            </div>
            <div className={style.block2}>
              <div style={{ width: '1px', height: '67px', backgroundColor: '#F7F7F71A' }}></div>
              <div className={style.content}>
                <p>Держатели</p>
                <p className={style.Num}>1232</p>
              </div>
              <div style={{ width: '1px', height: '67px', backgroundColor: '#F7F7F71A' }}></div>
            </div>
            <div className={style.block3}>
              <p>Транзакции</p>
              <p className={style.Num}>1122</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agreements