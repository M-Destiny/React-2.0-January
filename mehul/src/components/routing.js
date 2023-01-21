import {
    createBrowserRouter,
  } from "react-router-dom";
import About from "./About";
import Content from "./Content";
import Service from "./Service";
import Product from "./Product";
import App from "./App";
import Usermarks from "./Usermarks";

  const router= createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path:'',
                element: <Content />
            },
            {
                path:'usermarks',
                element: <Usermarks />
            },
            {
                path:'about',
                element: <About />
            },
            {
                path:'service',
                element: <Service />
            },
            {
                path:'product',
                element: <Product />
            }
        ]
    }
  ]);
  
  export default router