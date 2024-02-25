import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';

import ProductCard from './ProductCard.jsx'; 

//Import Swiper styles
import '../styles/custom.css';

//Importamos Datos
import data from '../data/Productos.json';

const products = data;

export default function App() {

    // Verificar si products es un array
    if (!Array.isArray(products)) {
      console.error('El archivo de productos no contiene un array válido.');
      return null; // O muestra un mensaje de error, o devuelve algo según tu necesidad
    }

  // Información real de productos
  /* const products = [
    {
      name: "Camiseta Clásica Blanca",
      img: "https://example.com/camiseta-blanca.jpg",
      price: 19.99,
      link: "https://example.com/camiseta-blanca"
    },
    {
      name: "Camiseta Estampada Floral",
      img: "https://example.com/camiseta-floral.jpg",
      price: 24.99,
      link: "https://example.com/camiseta-floral"
    },
    {
      name: "Camiseta Deportiva Negra",
      img: "https://example.com/camiseta-negra.jpg",
      price: 29.99,
      link: "https://example.com/camiseta-negra"
    },
    {
      name: "Camiseta Manga Larga Rayada",
      img: "https://example.com/camiseta-rayada.jpg",
      price: 34.99,
      link: "https://example.com/camiseta-rayada"
    },
    {
      name: "Camiseta Vintage Gris",
      img: "https://example.com/camiseta-gris.jpg",
      price: 27.99,
      link: "https://example.com/camiseta-gris"
    }
  ]; */

  // Dividir los productos en grupos de 4 para cada SwiperSlide
  const productsInSlides = [];
  for (let i = 0; i < products.length; i += 4) {
    productsInSlides.push(products.slice(i, i + 4));
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]} 
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide>
          <div className=''>
              <ProductCard
                key={product.name} // Ajusta esto según la identificación única de tus productos
                img={product.img}
                name={product.name}
                price={product.price}
                link={product.link}
              />
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
