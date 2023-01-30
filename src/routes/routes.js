import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Main from "../layout/Main/Main";
import About from "../pages/Main/About";
import Home from "../pages/Main/Home";
import Contact from "../pages/Main/Contact";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Notfound from "../components/Shared/Notfound";
import RequireAuth from "../pages/Auth/RequireAuth/RequireAuth";
import ShippingInfo from "../pages/Main/ShippingInfo";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../layout/Dashboard/Dashboard";
import ProductList from "../pages/Dashboard/ProductList";
import AddProduct from "../pages/Dashboard/AddProduct";
import Payment from "../pages/Dashboard/Payment";
import Orders from "../pages/Dashboard/Orders";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <RequireAuth>
            <About />
          </RequireAuth>
        ),
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/contact",
        element: <RequireAuth> <Contact /> </RequireAuth>, 
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/shipping-details",
        element: (
          <RequireAuth>
            <ShippingInfo />
          </RequireAuth>
        ),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "*",
        element: <Notfound></Notfound>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      {
        path: "/dashboard",
        element: <ProductList />, //this will also require admin
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "update-product/:id",
        element: <UpdateProduct />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);

export default routes;
