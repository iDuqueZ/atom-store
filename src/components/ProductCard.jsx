import '../styles/custom.css';

const ProductCard = ({ img, name, price, link }) => {
  return (
    <div className="rounded-lg border shadow-sm">
      <div className="grid gap-2">
        <a className="inline-block w-full" href="#">
          <img
            src={img}
            alt="Imagen"
            height="200px"
            className="w-full aspect-[3/4] object-cover rounded-lg overflow-hidden border dark:border-gray-800"
          />
        </a>
        <div className="grid gap-1 px-1">
          <a className="text-base font-semibold hover:underline dark:hover:underline-none" href="#">
            {name}
          </a>
          <p className="text-xs leading-none">{name}</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-base w-full text-right px-1">$ {price}</div>
          <a
            href={link}
            style={{textDecoration: "none"}}
            className="bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors duration-300 ease-out border-t-0"
          >
            Ver producto
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
