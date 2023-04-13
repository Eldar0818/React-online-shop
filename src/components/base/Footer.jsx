import { Link } from 'react-router-dom'
import styles from '../../assets/styles/base/footer.module.css'
import { AiFillFacebook, AiOutlineInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BsPinterest} from 'react-icons/bs'
import paymentsImg from '../../assets/imgs/payments.png'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <article className={styles.leftContent}>
                <Link to="/">EDR_SHOP.</Link>
                <p>Looking for the latest fashion trends in girls' clothing? Look no further than our ecommerce website! We offer a wide range of dresses, T-shirts, and light jackets for girls of all ages. Our selection is constantly updated with new styles and designs, so you're sure to find something you'll love. Start browsing today!</p>
                <div className={styles.social}>
                    <Link to="/" className={styles.sociallink}>
                        <AiFillFacebook className={styles.socialicon} />
                    </Link>
                    <Link to="/" className={styles.sociallink}>
                        <AiOutlineInstagram className={styles.socialicon} />
                    </Link>
                    <Link to="/" className={styles.sociallink}>
                        <AiFillTwitterCircle className={styles.socialicon} />
                    </Link>
                    <Link to="/" className={styles.sociallink}>
                        <BsPinterest className={styles.socialicon} />
                    </Link>
                </div>
            </article>
        </div>
        <div className={styles.right}>
            <article className={styles.rightContent}>
                <h2>Contact</h2>
                <p>Dagsverksvägen 153, 163 44 Spånga</p>
                <p>+46728403982</p>
                <p>edrshop@contact.dev</p>
                <img src={paymentsImg} alt="poster" />
            </article>
        </div>
    </div>
  )
}

export default Footer