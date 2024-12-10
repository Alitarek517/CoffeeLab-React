import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import ProductsSection from "../Components/ProductsSection";
function ProductsPage() {
    return (
      <div className="grid grid-cols-1 font-park">
        <Navigation />
        <div className="grid grid-cols-[300px_1fr] mx-[40px] mb-[150px] mt-[100px] gap-[5%]">
          <Filter />
          <ProductsSection />
        </div>
        <Footer />
      </div>
    );
  }
export default ProductsPage;
  
