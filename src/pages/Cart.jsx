import styles from '../assets/styles/cart/cartpage.module.css'
import CartHeader from '../components/cart/CartHeader'
import CartItems from '../components/cart/CartItems'
import CartSummary from '../components/cart/CartSummary'

const Cart = () => {
  return (
    <div className='page'>
        <CartHeader/>
        <div className={styles.cartbody}>
            <CartItems/>
            <CartSummary/>
        </div>
    </div>
  )
}

export default Cart