import styles from '../../assets/styles/products/listheader.module.css'

const ListHeader = ({ pathname }) => {

  return (
    <div className={styles.container}>
        <header>
            <h1>Products List</h1>
            <div className="underline"></div>
        </header>
        <div className={styles.titlebox}>
         <span>
            {pathname}
         </span>
        </div>
    </div>
  )
}

export default ListHeader