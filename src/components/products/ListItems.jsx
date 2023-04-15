import styles from '../../assets/styles/products/listitems.module.css'
import { Link } from 'react-router-dom'
import { useFetchProducts } from '../helper/useProducts'

const ListItems = ({ pathname}) => {

    const { data: products } = useFetchProducts()
    const filteredByCategory = products?.filter(item => pathname === "All" ? item : item.category === pathname)
    console.log(products);

  return (
    <div className={styles.container}>
        {
          filteredByCategory?.map(product=> (
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