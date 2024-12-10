import BestSellerCard from "./BestSellerCard";
import { useEffect, useState , useContext } from "react";
import { DataContext } from "./FetchData";
function BestSellerSection(){
    const data = useContext(DataContext);
    
    var products = [];
    const [productIndx,setProductIndx] = useState(0);
    if(data){
      products = data.slice(0,3);
    }
    const goNext = () => {
        setProductIndx((prevText) => (prevText + 1) % products.length);
      };
    
      useEffect( () =>{
        const interval = setInterval(() => {
          goNext()}, 4000);
            return () => clearInterval(interval);
      })
      return (
        <div className="p-[1.5%]">
            <h1 className="text-5xl font-medium m-10">Best Seller</h1>
            
            {products.length > 0 && products[productIndx] ? (
                <BestSellerCard product={products[productIndx]} />
            ) : (
                <p className="text-center text-gray-500">Loading products...</p>
            )}
    
            <div className="flex justify-center mt-[1%] space-x-[10px]">
                {products &&
                    products.map((_, index) => (
                        <button
                            key={index}
                            className={`h-4 w-4 rounded-full ${
                                productIndx === index ? 'bg-coffee-footer' : 'bg-gray-300'
                            } bottom-[5%] left-[50%]`}
                            onClick={() => setProductIndx(index)}
                        ></button>
                    ))}
            </div>
        </div>
    );
    
}
export default BestSellerSection;