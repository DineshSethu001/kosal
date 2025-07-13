import React from 'react'
import p1 from '../assets/img/products/p1.jpg'
import p2 from '../assets/img/products/p2.jpg'
import p3 from '../assets/img/products/p3.jpg'
const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <div className="flex gap-10">
        <img src={p1} className="rounded-full w-100 h-100" alt="" />
        <img src={p2} className="rounded-full w-100 h-100" alt="" />
        <img src={p3} className="rounded-full w-100 h-100" alt="" />
      </div>
    </div>
  )
}

export default Products