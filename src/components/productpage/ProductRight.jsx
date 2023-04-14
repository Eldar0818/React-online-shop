import styles from '../../assets/styles/productpage/product.module.css'
import {  BsCartFill } from 'react-icons/bs'

const ProductRight = (props) => {
  return (
    <div className={styles.right}>
        <article className={styles.iteminfo}>
            <h2>{props.title}</h2>
            <h4>{props.price} Kr/-</h4>
            <p>{props.description}</p>
            <select id="size" className={styles.size}>
                {props.sizes.map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                ))}
            </select>
            <div className={styles.amount}>
                <label>Anount:</label>
                <input type="number" />
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