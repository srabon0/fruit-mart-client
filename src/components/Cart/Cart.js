import React from "react";
import useCart from "../Hooks/useCart";
import CartRow from "./CartRow";

const Cart = () => {
  const [cart] = useCart();

  const initialValue = 0;
  const amountTotal = cart.reduce(
    (accumulator, current) => accumulator + current.price * current.qty,
    initialValue
  );
  console.log(amountTotal);

  return (
    <div className="w-2/3 mx-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Fruit Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((item, index) => (
            <CartRow key={index} item={item} sl={index}></CartRow>
          ))}

          { amountTotal>0 ? <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Total</td>
          <td>{amountTotal}</td>
          </tr>: <></>  }
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
