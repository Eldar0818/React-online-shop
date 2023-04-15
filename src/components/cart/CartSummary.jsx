import styles from '../../assets/styles/cart/cartpage.module.css'
import { useFetchCartItems } from '../helper/useCart'

const CartSummery = () => {

  const { data: itemList } = useFetchCartItems()

  const totalPrice = itemList?.map(item => item.price * item.amount).reduce((total, num) => total + num, 0)
  const shippingCost = totalPrice > 500 ? 0 : 120
  const shippingDiscount = shippingCost === 0 ? -120 : 120

  return (
    <div className={styles.summary}>
      <div className={styles.summaryCard}>
        <h3 className={styles.summaryHeading}>ORDER SUMMARY</h3>
        <div className={styles.summaryItem}>
          <h4>Subtotal:</h4>
          <p>{totalPrice} SEK</p>
        </div>
        <div className={styles.summaryItem}>
          <h4>Shipping Cost:</h4>
          <p>{shippingCost} SEK</p>
        </div>
        <div className={styles.summaryItem}>
          <h4>Shipping Discount:</h4>
          <p>{shippingDiscount} SEK</p>
        </div>
        <div className={styles.summaryItem}>
          <h4>Final Price:</h4>
          <p>{totalPrice + shippingCost} SEK</p>
        </div>
        <button className={styles.checkkoutBtn}>Checkout</button>
      </div>
    </div>
  )
}

export default CartSummery