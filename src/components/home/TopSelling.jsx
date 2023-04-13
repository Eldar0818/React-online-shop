import styles from '../../assets/styles/home/topselling.module.css'
import sampleImg from '../../assets/imgs/product.png'
import { Link } from 'react-router-dom'

const TopSelling = () => {

    const dummyData = [
        {
            _id: "1",
            title: "Product01",
            price: 485,
            poster: sampleImg,
            desc: "Some lttele description about product01 here, a small paragraph would be the best."
        },
        {
            _id: "2",
            title: "Product02",
            price: 565,
            poster: sampleImg,
            desc: "Some lttele description about product02 here, a small paragraph would be the best."
        },
        {
            _id: "3",
            title: "Product03",
            price: 376,
            poster: sampleImg,
            desc: "Some lttele description about product03 here, a small paragraph would be the best."
        },
        {
            _id: "4",
            title: "Product04",
            price: 610,
            poster: sampleImg,
            desc: "Some lttele description about product04 here, a small paragraph would be the best."
        },
    ]

  return (
    <div className={styles.container}>
        <header>
            <h2>Top Selling Items In Recent</h2>
            <div className="underline"></div>
        </header>
        <div className={styles.content}>
            {dummyData.map(data => (
                <Link to="/" key={data._id}>
                    <div 
                        className={styles.card}
                        >
                            <img src={data.poster} alt="poster" />
                            <p className={styles.desc}>{data.desc}</p>
                            <div className={styles.info}>
                                <p>{data.title}</p>
                                <p>{data.price} kr/-</p>
                            </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default TopSelling