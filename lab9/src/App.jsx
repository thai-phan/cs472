import {useReducer, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductsList from "./ProductsList.jsx";
import ProductsListReducer from "./ProductsListReducer.jsx";


function reducer(state, action) {
  if (action.type === 'toggle') {
    return state.map(data => {
      if (data.id === action.id) {
        data.inStock = !data.inStock;
      }
      return data;
    });
  }
  throw Error('Unknown action.');
}

function App() {

  const [data, setData] = useState([
    {id: 1, name: 'Apple', price: 1, inStock: true},
    {id: 2, name: 'Banana', price: 1, inStock: false},
    {id: 3, name: 'Cherry', price: 2, inStock: true}
  ])

  const [state, dispatch] = useReducer(reducer, [
    {id: 1, name: 'Apple', price: 1, inStock: true},
    {id: 2, name: 'Banana', price: 1, inStock: false},
    {id: 3, name: 'Cherry', price: 2, inStock: true}
  ]);

  const toggleInStock = (id) => {
    setData(prevState => prevState.map(d => {
      if (d.id === id) {
        d.inStock = !d.inStock;
      }
      return d;
    }))
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
        <div>useState</div>
        <ProductsList products={data} toggleInStock={toggleInStock}/>

        <div>useReducer</div>
        <ProductsListReducer products={state} dispatch={dispatch}/>
      </>
  )
}

export default App
