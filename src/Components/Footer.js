import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";

function Footer() {
  return (
    <div className="h-[250px] flex flex-col pt-6 text-[30px] bg-coffee-nav text-white">
      <div className="grid grid-cols-3 h-[95%] gap-[10%] ml-[8%]">
        
        <div className="">
          <h1>Our Mission</h1>
          <p className="text-lg my-[3%]"> We’re committed to sourcing sustainable coffee and supporting local communities.</p>
        </div>
        
        <div >
          <h1>Contact Us</h1>
          <div className="">
            <div className="flex items-center my-[5%]">
              <Phone className="w-[15px] h-[15px] mr-2" />
              <p className="text-sm">01129285140</p>
            </div>
            <div className="flex items-center my-[5%]">
              <Email className="w-[15px] h-[15px] mr-2" />
              <p className="text-sm">alitarek664@gmail.com</p>
            </div>
          </div>
          
        </div>
        
        <div className="">
          <h1>Social Media</h1>
          <div className="">
                <div className="flex items-center my-[4%]">
                  <Facebook className="w-[15px] h-[15px] mr-2"/>
                  <p className="text-[12px]"><a href="https://www.facebook.com/profile.php?id=100035578659876" target="_blank">Facebook</a></p>
                </div>
                <div className="flex items-center my-[4%]">
                  <Instagram className="w-[15px] h-[15px] mr-2"/>
                  <p className="text-[12px]"><a href="https://www.instagram.com/ali_tarek517/" target="_blank">Instagram</a></p>
                </div>
                <div className="flex items-center my-[%]">
                  <LinkedIn className="w-[15px] h-[15px] mr-2"/>
                  <p className="text-[12px]"><a href="https://www.linkedin.com/in/ali-tarek517/" target="_blank">LinkedIn</a></p>
                </div>
              </div>
          </div>
          
      </div>
      
      <div className="text-right border-t border-gray-200 p-2 text-lg">
        <p className="mr-[5%]">© Copyrights: Ali Tarek</p>
      </div>
    </div>
  );
}

export default Footer;
