import styles from '../assets/styles/productpage/product.module.css'
import ProductLeft from '../components/productpage/ProductLeft'
import ProductRight from '../components/productpage/ProductRight'
import data from '../assets/dummyList.json'
import { useLocation } from 'react-router-dom'

const ProductPage = () => {

    const location = useLocation()
    const pathId = location.pathname.split("/")[2]

    const product = data.products.filter(item => item._id === pathId)[0]

    const { poster, sizes, title, description, price, category } = product

  return (
    <section className='page'>
        <div className={styles.content}>
            <ProductLeft
                poster={poster}
            />
            <ProductRight
                sizes={sizes}
                title={title}
                description={description}
                price={price}
                category={category}
            />
        </div>
    </section>
  )
}

export default ProductPage