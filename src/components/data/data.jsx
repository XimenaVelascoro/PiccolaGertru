import React from "react";
import './data.css';
import antipasto from "../../assets/img/antipasto.jpeg";
import Foccacia from "../../assets/img/foccacia.jpg";
import Mozzarella from "../../assets/img/mozzarellacaliente.jpg";
import PicadaLomo from "../../assets/img/lomodecerdoychampinones.jpg";
import SteakPimienta from "../../assets/img/carnesteakpimienta.jpg";
import Costillabbq from "../../assets/img/costillasbbq.jpg";
import SalmonParrilla from "../../assets/img/salmonalaparrillaa.jpg";
import FileteAtun from "../../assets/img//atunalaparrillaaa.jpg";
import Cazuela from "../../assets/img/cazuelademariscos.jpg";
import MacarroniAlHorno from "../../assets/img/macarronialhorno.jpg";
import Lasagna from "../../assets/img/lasagnabolognesa.jpg";
import MacarroniQuesos from "../../assets/img/macarroni4quesoss.jpg";
import RissottoFrutos from "../../assets/img/rissottofrutosdelmar.jpg";
import Paella from "../../assets/img/paellamarinera.jpg";
import RissottoFun from "../../assets/img/rissottoalfunghi.jpg";
import Carbonara from "../../assets/img/carbonara.jpg";
import SpaAlPesto from "../../assets/img/spaghettialpesto.jpg";
import SpaNero from "../../assets/img/spaghettinero.jpg";
import PizzaCasa from "../../assets/img/PIZZA.jpg";
import PizzaCarnes from "../../assets/img/pizzacarnes.jpg";
import PizzaBari from "../../assets/img/pizzajamonyqueso.jpg";
import Agua from "../../assets/img/vasodeagua.jpg" ;
import Cafe from "../../assets/img/cafeamericano.jpg";
import Limonada from "../../assets/img/limonadacerezada.jpg";
import Soda from "../../assets/img/sodafrutosrojoshatsu.jpg";
import Canada from "../../assets/img/canadadry.jpg";
import CervezaNacional from "../../assets/img/cervezanacional.jpg";
import CervezaCorona from "../../assets/img/cervezaimportada.jpg";
import Queso from "../../assets/img/quesoconarequipe.jpg";
import Palitos from "../../assets/img/palitosdeharina.jpg";
import BrownieConHelado from "../../assets/img/brownieconhelado.jpg";

const data = [ 
  
    {
      id: 100,
      category: "ENTRADAS",
      products: [
        {
          id: 101,
          nameProduct: "Antipasto",
          description:
            "Mozzarella di bufala, tomate seco, berenjena, pimenton, champiñon y tahini de garbanzo",
          price: "$32000",
          img: antipasto,
          quantity: 1,
        },
        {
          id: 102,
          nameProduct: "Foccacia Tahini",
          description: "Pan al horno de leña con dip de tahini de garbanzo",
          price: "$20000",
          img: Foccacia,
          quantity: 1,
        },
        {
          id: 103,
          nameProduct: "Mozzarrella Caliente",
          description:
            "Acompañado de rodajas de tomate, albahaca y queso mozzarella gratinado",
          price: "$19000",
          img: Mozzarella,
          quantity: 1,
        },
      ]
    },
    {
      id: 120,
      category: "CARNES",
      products: [
        {
          id: 121,
          nameProduct: "Picada de lomo con champiñones",
          description:
            "Trozos de lomo salteados con champiñones y crema de leche acompañada de pasta o ensalada",
          price: "$39000",
          img: PicadaLomo,
          quantity: 1,
        },
        {
          id: 122,
          nameProduct: "Steak Pimienta",
          description: "Acompañado de pasta o ensalada",
          price: "$43000",
          img: SteakPimienta,
          quantity: 1,
        },
        {
          id: 123,
          nameProduct: "Costillas BBQ",
          description: "Acompañadas de pasta o ensalda",
          price: "$42000",
          img: Costillabbq,
          quantity: 1,
        }
      ]
    },
    {
      id: 140,
      category: "PESCADOS",
      products: [
        {
          id: 141,
          nameProduct: "Salmon Parrilla",
          description: "Acompañado de pasta o ensalada",
          price: "$42000",
          img: SalmonParrilla,
          quantity: 1,
        },
        {
          id: 142,
          nameProduct: "Filete de atún a la parrilla ",
          description: "Acompañado de pasta o ensalada",
          price: "$42000",
          img: FileteAtun,
          quantity: 1,
        },
        {
          id: 143,
          nameProduct: "Cazuela de mariscos",
          description: " ----------- ",
          price: "$42000",
          img: Cazuela,
          quantity: 1,
        }
      ]
    },
    {
      id: 160,
      category: "PASTAS",
      products: [
        {
          id: 161,
          nameProduct: "Macarroni al horno",
          description: "Salsa rose con queso derretido al hornode leña",
          price: "$32000",
          img: MacarroniAlHorno,
          quantity: 1,
        },
        {
          id: 162,
          nameProduct: "Lasagna Bolognesa",
          description: "Salsa bolognesa con queso derretido al horno de leña",
          price: "$32000",
          img: Lasagna,
          quantity: 1,
        },
        {
          id: 163,
          nameProduct: "Macarroni cuatro quesos",
          description: "Salsa blanca, queso holandés, azul y mozzarrella",
          price: "$32000",
          img: MacarroniQuesos,
          quantity: 1,
        }
      ]
    },
    {
      id: 180,
      category: "RISSOTTO",
      products: [
        {
          id: 181,
          nameProduct: "Rissotto frutos del mar",
          description: " -------------  ",
          price: "$42000",
          img: RissottoFrutos,
          quantity: 1,
        },
        {
          id: 182,
          nameProduct: "Paella marinera",
          description: "Camarón, calamar pescado, langostinos y mejillones",
          price: "$49000",
          img: Paella,
          quantity: 1,
        },
        {
          id: 183,
          nameProduct: "Rissotto al funghi",
          description: " -------------  ",
          price: "$37000",
          img: RissottoFun,
          quantity: 1,
        }
      ]
    },
    {
      id: 190,
      category: "SPAGUETTI",
      products: [
        {
          id: 191,
          nameProduct: "Carbonara",
          description: "En salsa blanca y tocineta",
          price: "$33000",
          img: Carbonara,
          quantity: 1,
        },
        {
          id: 192,
          nameProduct: "Spaghetti al pesto",
          description: " -------------  ",
          price: "$42000",
          img: SpaAlPesto,
          quantity: 1,
        },
        {
          id: 193,
          nameProduct: "Spaguetti Nero",
          description: " -------------  ",
          price: "$42000",
          img: SpaNero,
          quantity: 1,
        }
      ]
    },
    {
      id: 220,
      category: "PIZZAS",
      products: [
        {
          id: 221,
          nameProduct: "De la casa",
          description:
            "Chorizo español, platano maduro frito, champiñon y cebolla",
          price: "$32000",
          img: PizzaCasa,
          quantity: 1,
        },
        {
          id: 222,
          nameProduct: "Carnes",
          description: "Chorizo español, salami italiano y jamón ",
          price: "$32000",
          img: PizzaCarnes,
          quantity: 1,
        },
        {
          id: 223,
          nameProduct: "Bari",
          description: "Queso manchego y jamón serrano",
          price: "$35000",
          img: PizzaBari,
          quantity: 1,
        }
      ],
    },
    {
      id: 250,
      category: "BEBIDAS",
      products: [
        {
          id: 251,
          nameProduct: "Agua",
          description: " -------------  ",
          price: "$6000",
          img: Agua,
          quantity: 1,
        },
        {
          id: 252,
          nameProduct: "Cafe americano",
          description: " -------------  ",
          price: "$7000",
          img: Cafe,
          quantity: 1,
        },
        {
          id: 253,
          nameProduct: "Limonada de cereza",
          description: " -------------  ",
          price: "$11000",
          img: Limonada,
          quantity: 1,
        },
        {
          id: 254,
          nameProduct: "Soda de frutos rojos",
          description: " -------------  ",
          price: "$13000",
          img: Soda,
          quantity: 1,
        },
        {
          id: 255,
          nameProduct: "Canada Dry",
          description: " -------------  ",
          price: "$7000",
          img: Canada,
          quantity: 1,
        },
        {
          id: 256,
          nameProduct: "Cerveza nacional",
          description: " -------------  ",
          price: "$10000",
          img: CervezaNacional,
          quantity: 1,
        },
        {
          id: 257,
          nameProduct: "Cerveza corona",
          description: " -------------  ",
          price: "$12000",
          img: CervezaCorona,
          quantity: 1,
        },
      ]
    },
    {
      id: 310,
      category: "POSTRES",
      products: [
        {
          id: 311,
          nameProduct: "Queso con arequipe",
          description: "Fundido al horno de leña",
          price: "$12000",
          img: Queso,
          quantity: 1,
        },
        {
          id: 312,
          nameProduct: "Palitos de harina",
          description: "En dip de nutella y arequipe",
          price: "$13000",
          img: Palitos,
          quantity: 1,
        },
        {
          id: 313,
          nameProduct: "Brownie con helado",
          description: "----------",
          price: "$13000",
          img: BrownieConHelado,
          quantity: 1,
        }
      ]
    }
  
]

const DataFood= ({allDataFood, SetAllDataFood}) => {
  return (
    <section id="data">
      <h5>Aqui Puedes ver</h5>
      <h2>Nuestro Menu</h2>
      <div className="container_data">
        {data.map(({ id, nameProduct, description, price, img, quantity }) => {
          return (
            <article key={id} className="data_item">
              <figure className="data_img">
                <img src={img} alt=''></img>
              </figure>
              <h2> {nameProduct}</h2>
              <div className="portafolio__item_cta">
                <h3> {description} </h3>
                <h5> {price} </h5>
                <h5> {quantity} </h5>
              </div>
              <div>
              <button onClick={() => onAddProduct()} className="btn-add-cart">
              Añadir al carrito
            </button>
              </div>
            </article>
          );
        })}
      </div>
    </section> //llama al #contact del archivo nav.jsx
  );
};

export default  data
