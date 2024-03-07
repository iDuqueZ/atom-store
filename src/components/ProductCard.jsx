import '../styles/custom.css';

const ProductCard = ({ img, name, description, price, promo, link }) => {


  function formatearPrecio(precio) {
    // Utiliza el método toLocaleString con el parámetro 'es' para formato en español
    return precio.toLocaleString('es');
  }
  

  return (
    <div className="rounded-lg border shadow-sm relative">
      <div className='absolute w-fit top-2 z-50'>
        <span className='bg-zinc-900 text-white text-xs font-medium px-2 py-1 border-neutral-400 shadow-md rounded-r-md border-1 border-l-0'>New</span>
      </div>
      <div className="grid gap-2">
        <a className="w-full group" href={link}>
        <div className='overflow-hidden'>
          <img
            src={img}
            loading="lazy"
            alt="Imagen"
            className="w-full aspect-[3/4] object-cover rounded-lg rounded-b-none overflow-hidden transition-scale brightness-85 duration-1000 ease-in-out group-hover:scale-110 group-hover:rounded-t-lg group-hover:brightness-100"
          />
        </div>
        <div className="grid gap-1 px-1">
          <a className="text-base font-semibold" href="#">
            {name}
          </a>
          <p className="text-xs leading-none">{description}</p>
        </div>
        <div className="flex flex-col gap-1">
          {/* Real Price */}
          <div className="text-gray-400 text-xs w-full text-right px-1 line-through">$ {formatearPrecio(price)}</div>
          {/* Discount Price */}
          <div className="font-semibold text-base w-full text-right px-1">$ {formatearPrecio(price - price * promo)}</div>
          
          <a
            href={link}
            style={{textDecoration: "none"}}
            className="bg-black text-white text-center py-2 rounded-lg rounded-t-none group-hover:bg-gray-800 group-hover:transition-colors duration-300 ease-out"
          >
            Ver producto
          </a>
        
        </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
