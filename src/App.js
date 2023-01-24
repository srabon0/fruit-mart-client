import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import routes from "./routes/routes";
export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <CartContext.Provider value={[cart, setCart]}>
        <RouterProvider router={routes} />
      </CartContext.Provider>
    </div>
  );
}

export default App;
