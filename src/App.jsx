import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import ProductList from "./assets/components/ProductList";

function App() {
  //productos que se añaden al carrito de compras
  const [allProducts, setallProducts] = useState([]);
  //para lo que es el total
  const [total, setTotal] = useState(0);
  //este sera un contador de productos
  const [countProducts, setcountProducts] = useState(0);
  return (
    <>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </>
  );
}

export default App;
