import { useState } from 'react';
import styles from '../../assets/styles/cart/cartpage.module.css'
import { BsFillTrashFill } from 'react-icons/bs'


const CartItems = ({ cartItems,  removeFromCart }) => {

  return (
    <div className={styles.itembox}>
        {
          cartItems.length > 0 ? cartItems.map(item => (
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
                      <p>{item.size}</p>
                    </div>

                </div>
                <div className={styles.itemright}>
                <h4>{item.price} SEK</h4>
                <p>Quantiy: {item.amount}</p>
                  <BsFillTrashFill 
                    className={styles.trashicon} 
                    onClick={() =>  removeFromCart(item._id)}
                  />
                </div>
            </div>
           ))
        : <p>Your cart is empty</p> }
    </div>
  )
}

export default CartItems