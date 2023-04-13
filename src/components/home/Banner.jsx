import styles from '../../assets/styles/home/banner.module.css'
import bannerPoster from '../../assets/imgs/banner.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <img src={bannerPoster} alt="poster" />
        </div>
        <div className={styles.right}>
            <article className={styles.content}>
                <h4>Season's best products & best prices!</h4>
                <h1>buy from us <br/> gain from us!</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem unde nemo pariatur.</p>
                <Link to="/" className={styles.link}>Shop Now</Link>
            </article>
        </div>
    </div>
  )
}

export default Banner