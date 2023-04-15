import styles from '../assets/styles/productpage/product.module.css'
import ProductLeft from '../components/productpage/ProductLeft'
import ProductRight from '../components/productpage/ProductRight'
import { useLocation } from 'react-router-dom'
import { useFetchProducts } from '../components/helper/useProducts'

const ProductPage = () => {

    const location = useLocation()
    const pathId = location.pathname.split("/")[2]

    const { data: products } = useFetchProducts()

    const product = products?.filter(item => item._id === pathId)[0]
    console.log(product);

  return (
    <section className='page'>
        <div className={styles.content}>
            <ProductLeft
                poster={product?.poster}
            />
            <ProductRight
                sizes={product?.sizes}
                title={product?.title}
                description={product?.description}
                price={product?.price}
                category={product?.category}
            />
        </div>
    </section>
  )
}

export default ProductPage