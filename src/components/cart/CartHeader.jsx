import styles from '../../assets/styles/cart/cartpage.module.css'

const CartHeader = ({cartLenght}) => {
  return (
    <div className={styles.header}>
        <h2 className={styles.heading}>YOUR CART ({cartLenght})</h2>
    </div>
  )
}

export default CartHeader