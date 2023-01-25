import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import routes from "./routes/routes";
export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Provider store={store}>
      <CartContext.Provider value={[cart, setCart]}>
        <RouterProvider router={routes} />
      </CartContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
