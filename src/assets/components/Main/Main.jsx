import "./Main.css"
export default function Main (  {articles, setArticles} ) {
    console.log(articles)

// <div className="row" key={articles.id}> <div/>

  return (
    <div className="product">
      <h2>Nuestro Menu</h2>
       {
        
        
          articles?.map((products) => (
            
            <div >
                
              <div>{products.category}</div>
            <div className="product-item"> {products.products.map((item) => (
                <div>{item.nameProduct}
                <div>{item.price}</div>
                <div> <img src={item.img} alt=" " /> </div>
                </div>
                

            ))} </div>
            </div>
            
         ))
         
       
        }

    </div>
  );
}
