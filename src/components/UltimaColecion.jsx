import React, { useState, useEffect } from 'react';
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


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, []);

  const loader = () => {
    return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 animate-fade-in-up animate-delay-300 animate-duration-slow'>
        {/* // aqui van los skeleton loaders */}
        <div className="animate-pulse bg-gray-300 h-96 w-60"></div>
        <div className="animate-pulse bg-gray-300 h-96 w-60 hidden md:block"></div>
        <div className="animate-pulse bg-gray-300 h-96 w-60 hidden md:block"></div>
        <div className="animate-pulse bg-gray-300 h-96 w-60 hidden md:block"></div>
        <div className="animate-pulse bg-gray-300 h-96 w-60 hidden md:block"></div>
      </div>  
    </>
    );
  }

  if (loading) {
    return loader();
  }else{
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
            <div className='md:max-h-500px animate-fade-in-up animate-delay-300 animate-duration-slow'>
            <SwiperSlide>
              <div className=''>
                <ProductCard
                  img={product.img}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  promo={product.promo}
                  link={product.link}
                />
              </div>
            </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </>
    );
  }
}
