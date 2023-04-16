import { Link } from 'react-router-dom'
import styles from '../../assets/styles/auth/auth.module.css'

const RegisterForm = () => {
  return (
    <div className={styles.authbox}>
        <h2 className={styles.heading}>SIGN UP</h2>
        <form className={styles.authForm}>
            <div className={styles.inputs}>
                <label>Username:</label>
                <input type="text" />
            </div>
            <div className={styles.inputs}>
                <label>Email:</label>
                <input type="email" />
            </div>
            <div className={styles.inputs}>
                <label>Password:</label>
                <input type="password" />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
        <p className={styles.redirect}>Already have an account ? Go to <Link to="/sign-in">Sign In</Link></p>
    </div>    
  )
}

export default RegisterForm