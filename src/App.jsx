import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Navubar from "./Navubar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inventory from "./pages/Inventory";
import AddProduct from "./pages/AddProduct";
import Reports from "./pages/Reports";
import Error from "./pages/Error";
import Docs from "./pages/Docs";
import Login from "./pages/Login";
import Singnup from "./pages/Singnup";
import Error404 from "./components/Error404";
import "primeicons/primeicons.css";
import Inventorycom from "./components/Inventorycom";
import Productadd from "./components/Productadd";
import { Data } from "./components/Product";
function App() {
  let [side, setSide] = useState(false);
  const [userData, setuserData] = useState(Data.data);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard state={{ side, setSide }} />,
    },
    {
      path: "/inventory",
      element: (
        <Inventory state={{ side, setSide }}>
          <Inventorycom data ={userData}/>
        </Inventory>
      ),
    },
    {
      path: "/addProduct",
      element: <AddProduct state={{ side, setSide }}>
        <Productadd setuserData = {setuserData}/>
      </AddProduct>,
    },
    {
      path: "/reports",
      element: <Reports state={{ side, setSide }} />,
    },
    {
      path: "/error",
      element: <Error state={{ side, setSide }} />,
    },
    {
      path: "/docs",
      element: <Docs state={{ side, setSide }} />,
    },
    {
      path: "/login",
      element: <Login state={{ side, setSide }} />,
    },
    {
      path: "/singnup",
      element: <Singnup state={{ side, setSide }} />,  
    },
    {
      path: "*",
      element: <Error404 state={{ side, setSide }} />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}>
      
      </RouterProvider>
    </>
  );
}

export default App;
