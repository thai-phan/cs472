import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductsList from "./ProductsList.jsx";


function App() {

  const [data, setData] = useState([
    {id: 1, name: 'Apple', price: 1, inStock: true},
    {id: 2, name: 'Banana', price: 1, inStock: false},
    {id: 3, name: 'Cherry', price: 2, inStock: true}
  ])

  const toggleInStock = (id) => {
    let dataa = data.map(d => {
      if (d.id === id) {
        d.inStock = !d.inStock;
      }
      return d;
    })
    setData(dataa)
  }

  return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo"/>
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo"/>
          </a>
        </div>
        <ProductsList products={data} toggleInStock={toggleInStock}/>

      </>
  )
}

export default App
