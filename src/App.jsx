import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Basket from "./assets/components/Basket";
import data from "./assets/data/data.js"
import { useState } from "react";




function App() {
  //useState con la data
  const [articles, setArticles] = useState(data);
  console.log(articles)

  return (
    <div  className="row">
      <Header 
      />
      <div>
        <Main 
        setArticles={setArticles} 
        articles={articles}/>

        <Basket/>
      </div>
    </div>
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
