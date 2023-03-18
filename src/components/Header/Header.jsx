import "./Header.css";

export default function Header() {
  return (
    <div className="container_header">
      <h1 href="#/logo" className="logop"> </h1>
      <h1 className="options">
        <a href="#/menu">MENU</a>
        <a href="#/carrito"> CARRITO </a>
        <a href="#/contacto">CONTACTO</a>
      </h1>
    </div>
  );
}
