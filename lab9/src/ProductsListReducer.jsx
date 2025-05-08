import React from 'react'
import ProductReducer from "./ProductReducer.jsx";

const ProductsList = (props) => {

  return (
      <>
        {
          props.products.map((p, idx) => <ProductReducer key={idx} product={p} dispatch={props.dispatch}/>)
        }
      </>
  )
}

export default ProductsList