import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import ProductList from './assets/components/ProductList'

function App() {
  const [count, setCount] = useState(0)
  return(
    <>
    <Header/>
    <ProductList />
    </>
  )
 
}

export default App
