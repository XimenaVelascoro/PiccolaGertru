import "./Header.css";


export default function Header() {
  return (
    <div className="container_header">
      <h1 href="#/logo" className="logop"> </h1>
      <h1 className="options">
        <div className="link-container"><a  className='menu' href="#/menu"></a>
        <small> Hablemos</small></div>
        <div className="link-container"><a className='car' href="#/carrito">  </a>
        <small> Hablemos</small>
        </div>
       <div className="link-container"> <a className='cell' href="#/contacto"></a>
       <small> Hablemos</small>
       </div>
      </h1>
    </div>
  );
}
