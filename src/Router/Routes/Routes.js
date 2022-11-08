import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Service/Service";
import Services from "../../Pages/Home/Service/Services";


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
        }
    ]
}

])

export default router;