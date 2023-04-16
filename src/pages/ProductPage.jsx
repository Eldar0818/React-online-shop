import styles from '../assets/styles/productpage/product.module.css'
import ProductLeft from '../components/productpage/ProductLeft'
import ProductRight from '../components/productpage/ProductRight'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { useFetchProducts } from '../components/helper/useProducts'
import { useState } from 'react'

const AddItemNotification = ({addClicked}) => {
    return (
        <div className={classNames(styles.notification, {
            [styles.activeNotification] : addClicked
        })}>
            <p>Item has been added!</p>
        </div>
    )
}

const ProductPage = () => {

    const [addClicked, setAddCliked] = useState(false)
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
                id={product?._id}
                poster={product?.poster}
                setAddCliked={setAddCliked}
            />
        </div>
        <AddItemNotification addClicked={addClicked} />
    </section>
  )
}

export default ProductPage