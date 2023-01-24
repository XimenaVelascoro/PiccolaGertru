//aqui va la información de cada producto
//que va a representar un diccionario u obj
//EL ID NO PUEDE REPETIRSE,
//puede ir incrementando pero no se puyede repetir
import antipasto from "../components/img/antipasto.jpeg";
import Foccacia from "../components/img/foccacia.jpg";
import Mozzarella from "../components/img/mozzarellacaliente.jpg";
import PicadaLomo from "../components/img/lomodecerdoychampinones.jpg";
import SteakPimienta from "../components/img/carnesteakpimienta.jpg";
import Costillabbq from "../components/img/costillasbbq.jpg";
import SalmonParrilla from "../components/img/salmonalaparrillaa.jpg";
import FileteAtun from "../components/img/atunalaparrillaaa.jpg";
import Cazuela from "../components/img/cazuelademariscos.jpg";
import MacarroniAlHorno from "../components/img/macarronialhorno.jpg";
import Lasagna from "../components/img/lasagnabolognesa.jpg";
import MacarroniQuesos from "../components/img/macarroni4quesoss.jpg";
import RissottoFrutos from "../components/img/rissottofrutosdelmar.jpg";
import Paella from "../components/img/paellamarinera.jpg";
import RissottoFun from "../components/img/rissottoalfunghi.jpg";
import Carbonara from "../components/img/carbonara.jpg";
import SpaAlPesto from "../components/img/spaghettialpesto.jpg";
import SpaNero from "../components/img/spaghettinero.jpg";
import PizzaCasa from "../components/img/PIZZA.jpg";
import PizzaCarnes from "../components/img/pizzacarnes.jpg";
import PizzaBari from "../components/img/pizzajamonyqueso.jpg";
import Agua from "../components/img/vasodeagua.jpg" ;
import Cafe from "../components/img/cafeamericano.jpg";
import Limonada from "../components/img/limonadacerezada.jpg";
import Soda from "../components/img/sodafrutosrojoshatsu.jpg";
import Canada from "../components/img/canadadry.jpg";
import CervezaNacional from "../components/img/cervezanacional.jpg";
import CervezaCorona from "../components/img/cervezaimportada.jpg";
import Queso from "../components/img/quesoconarequipe.jpg";
import Palitos from "../components/img/palitosdeharina.jpg";
import BrownieConHelado from "../components/img/brownieconhelado.jpg";

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

export default  data
