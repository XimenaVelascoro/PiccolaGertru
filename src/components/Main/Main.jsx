import "./Main.css";
export default function Main({ articles, setArticles }) {
  console.log(articles);

  // <div className="row" key={articles.id}> <div/>

  return (
    <div className="product">
      <h2>NUESTRO MENU</h2>
      {articles?.map((products) => (
        <div>
          <div key={products.item} className="product-title" >{products.category}</div>
          <div className="product-item">
            {" "}
            {products.products.map((item) => (
              <div className="nameProduct">
                {item.nameProduct}
                <div className="img-product">
                  <img src={item.img} alt=" " />{" "}
                </div>
                <div> {item.description} </div>

                <div>
                  <div>{item.price}</div>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
