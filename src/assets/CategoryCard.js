function CategoryCard({ product }) {
    return (
        <div className="m-6 w-[400px] h-[380px] p-6 rounded-lg border-4 border-gray-200 shadow-2xl hover:scale-105 duration-200">
            <div className="relative w-full h-[263px]">
                <img src={product.imageURL} alt={product.name} className="rounded-md h-full w-full object-cover" />
                
                {/* Dark overlay and hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 rounded-md transition-opacity duration-500">
                    <div className="text-center">
                        <p className="text-white text-4xl font-bold">{product.name}</p>
                        <div className="h-1 w-[40px] mt-2 bg-yellow-500 mx-auto"></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default CategoryCard;
