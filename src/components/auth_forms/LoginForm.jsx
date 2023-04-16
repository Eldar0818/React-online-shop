import { Link } from 'react-router-dom'
import styles from '../../assets/styles/auth/auth.module.css'

const LoginForm = () => {
  return (
    <div className={styles.authbox}>
        <h2 className={styles.heading}>SIGN IN</h2>
        <form className={styles.authForm}>
            <div className={styles.inputs}>
                <label>Email:</label>
                <input type="email" />
            </div>
            <div className={styles.inputs}>
                <label>Password:</label>
                <input type="password" />
            </div>
            <button type='submit'>Sign In</button>
        </form>
        <p className={styles.redirect}>Don\t have an account yet ? Go to <Link to="/sign-up">Sign Up</Link></p>
    </div>
  )
}

export default LoginForm