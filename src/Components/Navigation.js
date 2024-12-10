import { ReactComponent as Logo } from "../assets/coffee.svg";
import { ReactComponent as LogIn } from "../assets/login.svg";
import { NavLink, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="h-[70px] bg-coffee-nav flex items-center text-white justify-between px-[50px] tracking-[1px]">
      <div className="flex items-center space-x-[30px]">
        <NavLink to="/" className="flex flex-row items-center">
          <Logo className="w-[40px] h-[40px] mr-[10px]" />
          <span className="text-3xl font-bold">Coffee Lab</span>
        </NavLink>

        <div className="space-x-[16px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:underline hover:underline-offset-4 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Products"
            className={({ isActive }) =>
              `hover:underline hover:underline-offset-4 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Coffee
          </NavLink>

          <button
            onClick={() => handleScroll("About")}
            className="hover:underline hover:underline-offset-4"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("Contact US")}
            className="hover:underline hover:underline-offset-4"
          >
            Contact
          </button>
        </div>
      </div>

      <NavLink
        to="/SignIn"
        className="flex items-center hover:underline hover:underline-offset-4"
      >
        <span className="mr-[10px]">Log in</span>
        <LogIn className="w-[40px] h-[40px]" />
      </NavLink>
    </div>
  );
}

export default Navigation;
