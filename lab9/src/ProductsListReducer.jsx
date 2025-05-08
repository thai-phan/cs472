import React, {useEffect} from 'react'
import ProductReducer from "./ProductReducer.jsx";

const ProductsList = (props) => {

  useEffect(() => {
    console.log(props.products)
  }, [props]);

  return (
      <>
        {
          props.products.map((p, idx) => <ProductReducer key={idx} product={p} dispatch={props.dispatch}/>)
        }
      </>
  )
}

export default ProductsList