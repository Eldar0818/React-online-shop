import styles from '../../assets/styles/base/newsletter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.container}>
        <h1>NewsLetter</h1>
        <p>Get timely updates from our favorite products</p>
        <div className={styles.inputs}>
            <input type="text" placeholder='Your Email Address'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter