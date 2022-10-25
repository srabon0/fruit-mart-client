import { useContext } from "react";
import { CartContext } from "../../App";

const useCart = () => {
  const [cart, setCart] = useContext(CartContext);

  

  
  
    const updateItem = (id, qty, newQty) => {
      let index = cart.findIndex((x) => x._id === id);
      if (index !== -1) {
        let temporaryarray = cart.slice();
        temporaryarray[index][qty] = newQty;
        setCart(temporaryarray);
      } else {
        console.log("no match");
      }
    };

    

  return [cart,setCart, updateItem];
};

export default useCart;
