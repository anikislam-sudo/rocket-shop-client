import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Service/Service";
import ServiceDetails from "../../Pages/Home/Service/ServiceDetails";
import Services from "../../Pages/Home/Service/Services";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";


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
            element:<Service></Service>
        },
        {
          path:"/services",
          element:<Services></Services>
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
          element:<ServiceDetails></ServiceDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/reviews',
            element: <Reviews></Reviews>,
          }
    ]
}

])

export default router;