import { NavLink } from "react-router-dom";

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };
  const fields = ["Username", "Email", "Password", "Confirm password"];
  return (
    <div>
      <h1 className="text-5xl text-center font-medium my-[6%]">
        Create an account
      </h1>

      <form
        onSubmit={handleSubmit}
        className=" rounded-lg shadow-lg h-[430px] w-[500px] border-gray-200 border-2 flex flex-col "
      >
        <div className="w-[500px] ml-[8%]">
          {fields.map((f, i) =>(
            <input
              type = {f === "Email"?"email":"text"}
              placeholder={f}
              key={i}
              className="mt-[6.5%] mb-[4%] w-[415px] px-[3%] border-2 border-gray-300 p-2 block rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 placeholder:text-gray-500 placeholder:font-medium"
              />
          ))}
          
        </div>
        <div className="text-lg ml-[9%]">
          <span className="mr-[2%]"> Already have an account?</span>
          <NavLink
            to="/SignIn"
            className=" text-black mb-[10px] underline underline-offset-1">
            Sign In
          </NavLink>
        </div>
        <button
          type="submit"
          className=" bg-coffee-footer bg-opacity-80 text-white font-medium py-2 px-6 mt-4 rounded-md hover:bg-opacity-100 transition-colors self-center"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default SignUp;
