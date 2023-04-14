import styles from '../../assets/styles/productpage/product.module.css'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { AiFillDollarCircle } from 'react-icons/ai'

const ProductLeft = ({ poster }) => {
  return (
    <div className={styles.left}>
        <img src={poster} alt="poster" />
        <div className={styles.terminfo}>
            <p className={styles.termtitle}>Shop with confidence</p>

            <div className={styles.praise}>
                <div className={styles.praiseline}>
                    <div className={styles.praiselineicon}>
                        <BsFillBookmarkStarFill className={styles.icon}/>
                    </div>
                    <div className={styles.praiselineText}>
                        <p>Top Rated Plus</p>
                        <span>Trusted seller, fast shipping, and best quality.</span>
                    </div>
                </div>
            </div>
            <div className={styles.praise}>
                <div className={styles.praiseline}>
                    <div className={styles.praiselineicon}>
                        <AiFillDollarCircle className={styles.icon}/>
                    </div>
                    <div className={styles.praiselineText}>
                        <p>Money back Guarantee</p>
                        <span>Get the item you ordered or get your money back.</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductLeft