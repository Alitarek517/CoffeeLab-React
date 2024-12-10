function ProductCard({ product }) {
  return (
    <div className="group m-6 w-[400px] h-[450px] p-6 rounded-lg border-2 border-gray-200 hover:shadow-2xl hover:scale-105 duration-200">
      <div className="relative w-full">
        <img src={product.imageURL} alt={product.name} className="rounded-md h-[263px]" />

        <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center opacity-0 hover:opacity-100 rounded-md transition-opacity duration-500">
          <p className="text-center text-white text-sm w-[80%] leading-relaxed ">
            {product.description}
          </p>
        </div>
      </div>
      <h3 className="p-2 pb-0 text-xl tracking-[0.75px]">{product.name}</h3>
      <p className="p-2 pb-0 font-medium text-lg tracking-[0.75px]">{product.price} EGP</p>
      <button className="w-full bg-gray-600 text-white font-semibold text-lg p-2 rounded-md mt-4 hover:bg-coffee-footer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
