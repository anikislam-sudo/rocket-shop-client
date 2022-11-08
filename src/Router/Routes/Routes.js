import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Service/Service";
import Services from "../../Pages/Home/Service/Services";
import Login from "../../Pages/Login/Login";
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
    ]
}

])

export default router;