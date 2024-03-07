
import Carousel from 'react-bootstrap/Carousel';

//Importamos Datos/
const apiKey = import.meta.env.PUBLIC_API_TOKEN;

const apiUrl = 'https://api.airtable.com/v0/appnnjkfOvvg37Pvz/Banners?view=Banners';

const dataReq = await fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
})

const responseData = await dataReq.json();


function UncontrolledExample() {

  // Verificar si responseData.records es un array
  if (!Array.isArray(responseData.records)) {
    console.error('La respuesta de la API no contiene un array válido.');
    return null; // O muestra un mensaje de error, o devuelve algo según tu necesidad
  }

  // Asegúrate de que responseData.records es un array antes de mapearlo
  const banners = responseData.records.map(record => record.fields);

  /* banners.map(banner => {

    //Validar si tiene file
    if (banner.file === undefined) {
      console.error('El banner no tiene archivo');
      return null; // O muestra un mensaje de error, o devuelve algo según tu necesidad
    }

    console.log(banner.file.map(file => file.url));
  }) */

  const slides = banners.map(banner => ({
    img: banner.desktop,
    alt: banner.alt,
    active: banner.active
  }));


  return (
    <Carousel fade>
      {
        slides.map((slide) => (
          <Carousel.Item>
            <img
              src={slide.img}
              loading="lazy"
              className="d-block w-100 object-cover h-[60vh] aspect-videod"
              alt={slide.alt}
            />
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default UncontrolledExample;