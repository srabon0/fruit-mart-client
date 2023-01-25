import React from "react";
import { useSelector } from "react-redux";
import CartRow from "./CartRow";

  // const amountTotal = cart.reduce(
  //   (accumulator, current) => accumulator + current.price * current.qty,
  //   initialValue
  // );

const Cart = () => {
  const state = useSelector((state)=>state.fruitState)
  const cart =  state.cart
  const cartTotal = state.cartTotal
  return (
    <>
    {
      cart.length ? 
      <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart?.sort((a, b) => a.cartPosition - b.cartPosition)?.map((item)=><CartRow key={item._id} fruit={item} ></CartRow>)
          }
        </tbody>
      </table>
      <p> cart total : {cartTotal} </p>
    </div>
    :<div className="card w-96 glass">
    <figure><img src="https://placeimg.com/400/225/arch" alt="car!"/></figure>
    <div className="card-body">
      <h2 className="card-title">Life hack</h2>
      <p>How to park your car at your garage?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>
    }

    </>
  );
};

export default Cart;
