import styles from '../../assets/styles/productpage/product.module.css'
import {  BsCartFill } from 'react-icons/bs'
import { useState } from 'react'

const ProductRight = (props) => {

    const [amount, setAmount] = useState(1)

    const handleIncrease = () => {
        setAmount(amount + 1)
    }

    const handleDecrease = () => {
        setAmount(amount > 1 ? amount - 1 : 1)
    }

  return (
    <div className={styles.right}>
        <article className={styles.iteminfo}>
            <h2>{props.title}</h2>
            <h4>{props.price * amount} Kr/-</h4>
            <p>{props.description}</p>
            <select id="size" className={styles.size}>
                {props.sizes.map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                ))}
            </select>
            <div className={styles.amount}>
                <button
                    onClick={handleDecrease}
                >
                    -
                </button>
                <span>{amount}</span>
                <button
                    onClick={handleIncrease}
                >
                    +
                </button>
            </div>
            <button className={styles.addcart}>
                <span>Add to cart</span>
                <BsCartFill className={styles.carticon} />
            </button>
        </article>
    </div>
  )
}

export default ProductRight