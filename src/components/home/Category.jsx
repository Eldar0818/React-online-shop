import { Link } from 'react-router-dom'
import styles from '../../assets/styles/home/category.module.css'

const Category = () => {

    const cateList = [
        {
            id: 1,
            poster: 'https://images.pexels.com/photos/9558777/pexels-photo-9558777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'T-Shirts'
        },
        {
            id: 2,
            poster: 'https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Dresses'
        },
        {
            id: 3,
            poster: 'https://images.pexels.com/photos/14260660/pexels-photo-14260660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Jackets'
        },
    ]

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            {
                cateList.map(item => (
                    <div 
                    key={item.id}
                    className={styles.box}
                    >
                        <img src={item.poster} alt="" />
                        <div className={styles.info}>
                            <h4>{item.title}</h4>
                            <Link to={`/products/${item.title}`}>Shop Now</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category