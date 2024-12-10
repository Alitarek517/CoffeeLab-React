function BestSellerCard({ product }) {
  return (
    <div className="h-[350px] p-6 flex flex-row shadow-md border border-gray-200 rounded-xl tracking-[1px]">

      <img src={product.imageURL} alt={product.name} className="w-[50%] rounded-lg shadow-md"/>

      <div className=" flex flex-col  items-start justify-between p-6 ml-[30px]">

        <div className="space-y-10">
          <h3 className="font-medium text-4xl ">{product.name}</h3>
        
          <p className=" text-gray-600 text-xl">{product.description}</p>
        </div>
        
        <div className="  flex items-center">
            <button className="text-white border-solid border-2 px-[20px] py-[10px] bg-coffee-footer rounded-md text-lg">Buy Now</button>
            <span className="ml-6 text-xl">{product.price} EGP</span>
        </div>

      </div>

    </div>
  );
}
export default BestSellerCard;
