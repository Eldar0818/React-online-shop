import styles from '../../assets/styles/cart/cartpage.module.css'
import { useFetchCartItems } from '../helper/useCart'

const CartItems = () => {

    const { data: itemList } = useFetchCartItems()

  return (
    <div className={styles.itembox}>
        {
           itemList?.map(item => (
            <div className={styles.cartitem} key={item._id}>
                <div className={styles.itemleft}>
                    <img src={item.poster} alt="poster" />
                </div>
                <div className={styles.itemcenter}>

                    <div className={styles.caritemInfo}>
                      <h4>Product name:</h4>
                      <p>{item.title}</p>
                    </div>
                    <div className={styles.caritemInfo}>
                      <h4>Product Id:</h4>
                      <p>{item._id}</p>
                    </div>
                    <div className={styles.caritemInfo}>
                      <h4>Type:</h4>
                      <p>{item.category}</p>
                    </div>
                    <div className={styles.caritemInfo}>
                      <h4>Size:</h4>
                      <p>{item.sizes[1]}</p>
                    </div>

                </div>
                <div className={styles.itemright}>
                  <div className={styles.amount}>
                    <button>-</button>
                    <span>{item.amount}</span>
                    <button>+</button>
                  </div>
                  <h4>{item.price * item.amount} SEK</h4>
                </div>
            </div>
           ))
        }
    </div>
  )
}

export default CartItems