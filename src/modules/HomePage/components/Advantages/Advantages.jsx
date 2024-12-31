import style from './Advantages.module.scss'
import img1 from "../../../../assets/images/Advantages1.png"
const Advantages = () => {
  return (
    <div className="container">
      <div className={style.advantage}>
        <div className={style.advantagesText}>
          <h2>Наши преимущества</h2>
          <p>Asman Coin имеет множество преимуществ, которые делают ее лучшим выбором для использования в качестве цифрового актива:</p>
        </div>
        <div className={style.Advantages}>
          <div className={style.AdvantagesBlock}>
            <div className={style.AdvantagesContent}>
              <div className={style.Img}>
                <img src={img1} alt="" />
                </div>
                <h2>Быстрота и масштабируемость</h2>
                <p>Благодаря использованию передовых технологий блокчейн, Asman Coin обеспечивает высокую скорость обработки транзакций и высокую масштабируемость, что делает ее идеальной для использования в качестве цифрового актива в повседневной жизни.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages