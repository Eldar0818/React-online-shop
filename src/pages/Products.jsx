import { useState } from 'react'
import ListHeader from '../components/products/ListHeader'
import ListItems from '../components/products/ListItems'

const Products = ({ pathname }) => {

  return (
    <section className='page'>
      <ListHeader pathname={pathname}/>
      <ListItems 
        pathname={pathname}
      />
    </section>
  )
}

export default Products