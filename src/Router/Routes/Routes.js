import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Service/Service";
import ServiceDetails from "../../Pages/Home/Service/ServiceDetails";
import Services from "../../Pages/Home/Service/Services";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";


 const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/service",
            element:<PrivateRouter><Service></Service></PrivateRouter>
        },
        {
          path:"/services",
          element:<PrivateRouter><Services></Services></PrivateRouter>
        },
        {
          path:"/addservice",
          element:<AddService></AddService>,
         
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/servicedetails/:id",
          element:<PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/reviews',
            element:<PrivateRouter><Reviews></Reviews></PrivateRouter> ,
          },
        {
            path: '/blog',
            element:<Blog></Blog> ,
          }
    ]
}

])

export default router;