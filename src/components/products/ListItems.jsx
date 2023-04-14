import styles from '../../assets/styles/products/listitems.module.css'
import data from '../../assets/dummyList.json'
import { Link } from 'react-router-dom'

const ListItems = ({ pathname}) => {

    const filteredByCategory = data.products.filter(item => pathname === "All" ? item : item.category === pathname)

  return (
    <div className={styles.container}>
        {
          filteredByCategory.map(product=> (
                <Link to={`/product/${product._id}`} key={product._id}>
                    <div className={styles.card}>
                        <img src={product.poster} alt="poster" />
                        <div className={styles.infobox}>
                            <span>{product.title}</span>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default ListItems