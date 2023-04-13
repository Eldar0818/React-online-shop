import React from 'react'
import Banner from '../components/home/Banner'
import Category from '../components/home/Category'
import TopSelling from '../components/home/TopSelling'
import NewsLetter from '../components/base/NewsLetter'

const Home = () => {
  return (
    <section className='page'>
        <Banner/>
        <Category/>
        <TopSelling/>
        <NewsLetter/>
    </section>
  )
}

export default Home