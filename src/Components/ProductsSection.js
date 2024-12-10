import React, { useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "./FetchData";

function ProductsSection() {
  const products = useContext(DataContext) || []; 
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  return (
    <div>
      {products.length > 0 ? (
        <>
          <section className="grid grid-cols-3 gap-[30px] border-gray-300-2 border rounded shadow-xl p-4">
            {displayedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </section>
          
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrevious}
              className={`px-4 py-2 rounded bg-coffee-footer text-white`}
            >
              Prev
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              className={`px-4 py-2 rounded bg-coffee-footer text-white`}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No products available.</p>
      )}
    </div>
  );
}

export default ProductsSection;
