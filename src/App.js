import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import { DataContext } from "./Components/FetchData";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { useState, useEffect } from "react";
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      
    },

    {
      path: "/SignIn",
      element: <SignInPage />,
    }
    ,
    { path: "/SignUp", 
      element: <SignUpPage /> 
    },
    {
      path: "/Products",
      element: <ProductsPage/>
    }
]);
function App() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch('/data.json').then((response) => {
        return response.json();
    }).then((data) => {
        setProducts(data);
    });
}, []);

  return (
    <DataContext.Provider value={products}>
      <RouterProvider router={router}/>
    </DataContext.Provider>
  );
}

export default App;
