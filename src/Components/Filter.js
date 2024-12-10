function Filter() {
    const icedCoffee = ["Iced Espresso", "Iced Latte", "Iced Mocha", "Frappe"];
    const hotCoffee = ["Turkish Coffee", "Cappuccino", "Espresso", "Latte"];
  return (
    <div className=" w-[350px] h-[660px] bg-coffee-footer shadow-md rounded">
       
        <h1 className="text-white text-3xl font-bold ml-[5%] py-[3%]">Filter</h1>

        <div className="grid grid-cols-1  bg-gray-100 border-b-1">
            <h1 className=" text-2xl my-[5%] ml-[5%]">Type</h1>
            <div className="ml-[10%] space-y-[5%] text-xl">
                <div>
                 
                    <div className="border-b-2 border-black w-[90%] flex items-center">
                        <input type="checkbox" id="icedCoffee" name="icedCoffee" value="icedCoffee" className="w-[20px] h-[20px] rounded mr-[2%]"/>
                        <label for="icedCoffee" className="text-2xl">Iced Coffee</label>
                    </div>

                    <div className=" my-[3%] space-y-[2%] ">
                        {icedCoffee.map((f) =>(
                            <div className="flex items-center">
                                <input type="checkbox" id={f} name={f} value={f} className="w-[20px] h-[20px] rounded mr-[2%]"/>
                                <label for={f} className="font-light">{f}</label><br/>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className="mt-[6%] ">

                        <div className="border-b-2 border-black w-[90%] flex items-center">
                            <input type="checkbox" id="hotCoffee" name="hotCoffee" value="hotCoffee" className="w-[20px] h-[20px] rounded mr-[2%]"/>
                            <label for="hotCoffee" className="text-2xl">Hot Coffee</label>
                        </div>

                        <div className=" my-[3%] space-y-[2%] ">
                            {hotCoffee.map((f) =>(
                                        <div className="flex items-center">
                                            <input type="checkbox" id={f} name={f} value={f} className="w-[20px] h-[20px] rounded mr-[2%]"/>
                                            <label for={f} className="font-light">{f}</label><br/>
                                        </div>
                                ))}
                        </div>
                </div>
            </div>
        
            <div className="border-t-2 border-black my-[5%]">
                <h1 className=" text-3xl  mt-[3%] ml-[5%] mb-[8%]">Price</h1>
                <div className="flex justify-evenly">
                    <input type="input" id="price" name="price" className=" ml-[1%] w-[30%] h-[50px] inline-block focus:outline-none border-[1px] border-coffee-footer p-2"/>
                    <h1 className="text-2xl inline-block mt-[2%]"> - </h1>
                    <input type="input" id="price" name="price" className="ml-[1%] w-[30%] h-[50px] inline-block border-[1px] focus:outline-none border-coffee-footer p-2"/>
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default Filter;