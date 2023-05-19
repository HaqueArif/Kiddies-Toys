import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import AddaToy from "../Pages/PrivateRoutes/AddaToy/AddaToy";
import ViewToyDetails from "../Pages/AllToys/ViewToyDetails";


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
          path: 'addToys',
          element: <AddaToy></AddaToy>
        },
        {
          path: 'allToys',
          element: <AllToys></AllToys>
        },
        {
          path: 'toyDetails/:id',
          element:<ViewToyDetails></ViewToyDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`) 
        }

      ]
    },
    {
      path:'*',
      element:<Error></Error>
  }
  ]);

  export default router;