import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Basket from "./assets/components/Basket";


function App() {
  return (
    <div>
      <Header/>
      <div className="row">
        <Main/> 
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
