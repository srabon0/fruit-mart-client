import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import About from "./components/About/About";
import Notfound from "./components/Shared/Notfound";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Shared/Navbar";
import Login from "./components/Login/Login/Login";
import SignUp from "./components/Login/SignUp/SignUp";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import Cart from "./components/Cart/Cart";
import { createContext, useState } from "react";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Dashboard/Orders";
import Payment from "./components/Dashboard/Payment";
import AddProduct from "./components/Dashboard/AddProduct";

export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <CartContext.Provider value={[cart, setCart]}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route
            path="/details/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route
            path="/about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
         <Route index element={<Orders />} />
         <Route path="/dashboard/payment" element={<Payment />} />
         <Route path="/dashboard/addproduct" element={<AddProduct />} />



          </Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
