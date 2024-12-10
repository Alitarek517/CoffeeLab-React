import Footer from "../Components/Footer";
import SignIn from "../Components/SignIn";
import { ReactComponent as Logo } from "../assets/coffee.svg";
import { NavLink } from "react-router-dom";
function SignInPage() {
    
    return (
      <div className="">

        <div className="bg-coffee-nav h-[70px] px-[50px] flex text-white shadow-sm">
          <NavLink to="/" className="flex flex-row items-center tracking-[1px]">
              <Logo className="w-[40px] h-[40px] mr-[10px]"/>
              <p className="text-3xl font-bold">Coffee Lab</p>
            </NavLink>
        </div>
        
        <div className="flex flex-col items-center mb-[53px]">
          <SignIn/>
        </div>
        <div>
          <Footer/> 
        </div>
        
      </div>
    
    )
}
  export default SignInPage;
  