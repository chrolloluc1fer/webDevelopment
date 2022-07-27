import './home.css'
import Product from './Product';
import React from 'react'

function Home() {
  return (
    <div className='product-container'>
        <Product/>
        <Product/>
        <Product/>
    </div>
  )
}

export default Home