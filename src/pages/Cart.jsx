import styles from '../assets/styles/cart/cartpage.module.css'
import CartHeader from '../components/cart/CartHeader'
import CartItems from '../components/cart/CartItems'
import CartSummary from '../components/cart/CartSummary'
import { useCartContext } from '../context/CartContext'

const Cart = () => {
  const { cartItems,  removeFromCart } = useCartContext()
  return (
    <div className='page'>
        <CartHeader cartLenght={cartItems.length}/>
        <div className={styles.cartbody}>
            <CartItems 
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
            <CartSummary
              cartItems={cartItems}
            />
        </div>
    </div>
  )
}

export default Cart