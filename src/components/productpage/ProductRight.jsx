import styles from '../../assets/styles/productpage/product.module.css'
import {  BsCartFill } from 'react-icons/bs'
import { useCartContext } from '../../context/CartContext'
import { useState } from 'react'

const ProductRight = (props) => {

    const [getSize, setGetSize] = useState("small")
    const [amount, setAmount] = useState(1)
    const { addToCart } = useCartContext()

    const handleAddToCart = () => {
        const itemToCart = {
            title: props.title,
            price: props.price * amount,
            _id: props.id,
            size: getSize,
            category: props.category,
            amount: amount,
            poster: props.poster
        }

        //console.log(itemToCart);
       addToCart(itemToCart)
       props.setAddCliked(true)
       setTimeout(() => {
        props.setAddCliked(false)
       }, 2500)
    }

  return (
    <div className={styles.right}>
        <article className={styles.iteminfo}>
            <h2>{props.title}</h2>
            <h4>{props.price * amount} Kr/-</h4>
            <p>{props.description}</p>
            <select 
                id="size" 
                className={styles.size}
                defaultValue={getSize}
                onChange={(e) => setGetSize(e.target.value)}
            >
                {props.sizes?.map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                ))}
            </select>
            <div className={styles.amount}>
                <button onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}>-</button>
                <span>{amount}</span>
                <button onClick={() => setAmount(amount + 1)}>+</button>
            </div>
            <button 
                className={styles.addcart}
                onClick={ handleAddToCart }
            >
                AddToCart
                <BsCartFill className={styles.carticon}/>
            </button>
        </article>
    </div>
)
}
export default ProductRight