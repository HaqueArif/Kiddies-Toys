import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import AddaToy from "../Pages/PrivateRoutes/AddaToy/AddaToy";
import ViewToyDetails from "../Pages/AllToys/ViewToyDetails";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../Pages/PrivateRoutes/MyToys/MyToys";
import UpdateToys from "../Pages/PrivateRoutes/MyToys/UpdateToys";


const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginLayout></LoginLayout> ,
      children:[
        {
            path: '/',
            element: <Navigate to='/home'></Navigate>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
          path: 'toyDetails/:id',
          element:<PrivateRoutes><ViewToyDetails></ViewToyDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`) 
        },
        {
          path: 'addToys',
          element: <PrivateRoutes><AddaToy></AddaToy></PrivateRoutes>
        },
        {
          path: '/mytoys',
          element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        },
        {
          path: '/updateToys/:id',
          element:<UpdateToys></UpdateToys>,
          loader:({params})=>fetch(`http://localhost:5000/myToys/${params.id}`)
        }
       

      ]
    },
    {
      path: "/home",
      element: <Main></Main>,
      children:[
        {
            path: '/home',
            element: <Home></Home>
        },
      ]
    },
    {
      path:'*',
      element:<Error></Error>
  }
  ]);

  export default router;