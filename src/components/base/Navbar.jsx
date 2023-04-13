import { Link } from 'react-router-dom'
import styles from '../../assets/styles/base/navbar.module.css'
import { CiDeliveryTruck } from 'react-icons/ci'
import { BsSearch, BsCartFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className={styles.container}>

        <div className={styles.topbar}>
            <CiDeliveryTruck className={styles.topicon} />
            <p>Free delivery for orders above 500 kr</p>
        </div>

        <nav className={styles.navigation}>

            <div className={styles.left}>
                <div className={styles.searchbar}>
                    <BsSearch className={styles.searchicon}/>
                    <input type="search" />
                </div>
            </div>

            <div className={styles.center}>
                <Link to="/" className={styles.logo}>EDR_SHOP.</Link>
            </div>

            <div className={styles.right}>
                <div className={styles.btns}>
                    <Link to="/" className={styles.loginlink}>Sign In</Link>
                    <Link to="/" className={styles.registerlink}>Sign Up</Link>
                    <Link to="/" className={styles.cartlink}>
                        <BsCartFill className={styles.carticon}/>
                        <span className={styles.cartcount}>0</span>
                    </Link>
                </div>
            </div>

        </nav>

    </div>
  )
}

export default Navbar