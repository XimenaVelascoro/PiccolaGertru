import "./Header.css"

export default function Header() {
  return (
    <div className="row center block">
      <div>
        <a href="#/logo">
          <h2 className="logop"> </h2>
        </a>
      </div>
      <div>
        <a href="#/menu">Menu</a>    <a href="#/carrito"> Carrito </a> 
      </div>
    </div>
  );
}
