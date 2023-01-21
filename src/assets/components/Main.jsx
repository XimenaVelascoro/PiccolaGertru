export default function Main (  {articles, setArticles} ) {
    console.log(articles)

  return (
    <div className="navi">
      <h2>Nuestro Menu</h2>
       {
        // <div className="row" key={articles.id}> <div/>
        
          articles?.map((products) => (
            
            <div>
                { console.log(products.products)}
              <div>{products.category}</div>
            <div> {products.products.map((item) => (
                <div>{item.nameProduct}
                <div>{item.price}</div>
                <div>{item.img}</div>
                </div>
                

            ))} </div>
            </div>
            
         ))
         
       
        }

    </div>
  );
}
