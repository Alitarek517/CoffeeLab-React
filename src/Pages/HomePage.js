import Navigation from '../Components/Navigation';
import AboutUs from '../Components/AboutUs';
import Footer from '../Components/Footer';
import Landing from '../Components/Landing';
import BestSellerSection from '../Components/BestSellerSection';
function HomePage(){

    return(
        <div className='font-park'>
            <div>
                <Navigation/>
                <Landing/>
            </div>
            <div className='px-[5%]'>
            <div>
                <BestSellerSection/>           
            </div>
            <div className='my-[5%]' id="About">
                <h1 className='px-[3.8%] my-6 text-5xl font-medium'>About Us</h1>
                <AboutUs/>
            </div>
            </div>
            <div id = "Contact US">
            <Footer/>

            </div>
        </div>
    )
}
export default HomePage;