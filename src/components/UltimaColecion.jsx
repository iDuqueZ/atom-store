import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import ProductCard from './ProductCard.jsx';

//Import Swiper styles
import '../styles/custom.css';

//Importamos Datos/
const apiKey = import.meta.env.PUBLIC_API_TOKEN;

const apiUrl = 'https://api.airtable.com/v0/appnnjkfOvvg37Pvz/Ultima-coleccion?view=Ultima-coleccion';

const dataReq = await fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
})

const responseData = await dataReq.json();

console.log(responseData);


export default function App() {

  // Verificar si responseData.records es un array
  if (!Array.isArray(responseData.records)) {
    console.error('La respuesta de la API no contiene un array válido.');
    return null; // O muestra un mensaje de error, o devuelve algo según tu necesidad
  }

  // Asegúrate de que responseData.records es un array antes de mapearlo
  const products = responseData.records.map(record => record.fields);

  // Verificar si products es un array
  if (!Array.isArray(products)) {
    console.error('El archivo de productos no contiene un array válido.');
    return null; // O muestra un mensaje de error, o devuelve algo según tu necesidad
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
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
