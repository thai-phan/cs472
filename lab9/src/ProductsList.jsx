import React from 'react'
import Product from "./Product.jsx";

const ProductsList = (props) => {

  return (
      <>
        {
          props.products.map((p, idx) => <Product key={idx} product={p} toggleInStock={props.toggleInStock}/>)
        }
      </>
  )
}

export default ProductsList