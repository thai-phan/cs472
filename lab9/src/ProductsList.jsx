import React, {useEffect} from 'react'
import Product from "./Product.jsx";

const ProductsList = (props) => {

  useEffect(() => {
    console.log(props.products)
  }, [props]);

  return (
      <>
        {
          props.products.map((p, idx) => <Product key={idx} product={p} toggleInStock={props.toggleInStock}/>)
        }
      </>
  )
}

export default ProductsList