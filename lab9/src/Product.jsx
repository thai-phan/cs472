const Product = (props) => {
  const {id, name, price, inStock} = props.product;
  return (
      <div className={"product-row"}>

        <div className={""}>
          ID: {id}
        </div>
        <div className={!inStock ? "color-red" : ""}>
          Name: {name}
        </div>
        <div>
          Price: {price}
        </div>
        <div >
          In Stock: {inStock ? "In stock" : "Not in stock"}
        </div>
        <button onClick={() => props.toggleInStock(id)}>show In Stock status</button>
      </div>

  )
}

export default Product