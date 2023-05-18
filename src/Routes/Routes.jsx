import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import AddaToy from "../Pages/PrivateRoutes/AddaToy/AddaToy";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'allToys',
          element: <AllToys></AllToys>
        },
        {
          path: 'addToys',
          element: <AddaToy></AddaToy>
        }

      ]
    },
    {
      path:'*',
      element:<Error></Error>
  }
  ]);

  export default router;