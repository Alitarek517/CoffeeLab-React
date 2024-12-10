import { NavLink } from "react-router-dom";
function SignIn() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Signed in Successfully!");
    };

    return (
        <div className>

            <h1 className="text-5xl text-center font-medium my-[6%]"> Sign In </h1>

            <form
                onSubmit={handleSubmit}
                className=" rounded-lg shadow-lg h-[430px] w-[500px] border-gray-200 border-2 flex flex-col "
            >
                
                <div className="w-full ml-[8%]">
                    <input
                        type="text"
                        placeholder="Username"
                        className="mt-[20%] mb-[7%] w-[415px] px-[3%] border-2 border-gray-300 p-2 block rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 placeholder:text-gray-500 placeholder:font-medium"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className=" mb-[5%] w-[415px] px-[3%] border-2 border-gray-300 p-2 block rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 placeholder:text-gray-500 placeholder:font-medium"
                    />
                </div>
            
            <div>
            <a href="/" className="text-[14px] ml-[9%] text-black block mb-[10px] underline underline-offset-1">Forgot your password?</a>
                <div className="flex items-center mb-[2%]">
                    <input
                    type="checkbox"
                    className="ml-[9%] w-[20px] h-[20px]"/>
                    <p className="ml-[3%] inline-block">Keep me signed in</p>
                </div>
            
            </div>
             <button
                type="submit"
                className=" bg-coffee-footer bg-opacity-90 text-white font-medium py-2 px-6 rounded-md hover:bg-opacity-100 transition-colors mt-[3.5%] self-center"
            >
                Sign In
            </button>

            <div className="text-[16px] mt-[2%] w-full flex justify-center">
            <p className="inline-block mr-[1%]"> Don't have an account?</p>
            <NavLink to="/SignUp" className=" text-black underline underline-offset-1"> Sign Up</NavLink>
            </div>
        </form>
        </div>
        
    );
}
export default SignIn;
