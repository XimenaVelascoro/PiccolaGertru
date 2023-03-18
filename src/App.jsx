import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import Basket from "../src/components/Basket";
import data from "../src/components/data/data"
import { useState } from "react";




function App() {
  //useState con la data
  const [articles, setArticles] = useState(data);
  console.log(articles)

  return (
    < >
      <Header/>
      <div>
        <Main 
        setArticles={setArticles} 
        articles={articles}/>

        <Basket/>
      </div>
    </>
  );
}


export default App;

/* esto va dentro de < Header / >  y < ProductList /> 
//productos que se añaden al carrito de compras
  const [allProducts, setallProducts] = useState([]);
  //para lo que es el total
  const [total, setTotal] = useState(0);
  //este sera un contador de productos
  const [countProducts, setcountProducts] = useState(0);
  dentro del return ----
         allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}*/
