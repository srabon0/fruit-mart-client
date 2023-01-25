// import React from "react";
// import { useState } from "react";
// import useCart from "../../components/Hooks/useCart";

// const CartRow = ({ sl, item }) => {
//   const { _id, name, price } = item;
//   const [cart, setCart, updateItem] = useCart();
//   const [qty, setQty] = useState(1);

//   const deleteFromCart = (id) => {
//     console.log("for delete", id);
//     const filtered = cart.filter((obj) => obj._id !== String(id));
//     setCart(filtered);
//     console.log(filtered);
//   };

//   const increaseQty = (id) => {
//     setQty(qty + 1);
//     updateItem(id, "qty", qty + 1);
//   };
//   const decreaseQty = (id) => {
//     if (qty > 0) {
//       setQty(qty + -1);
//       updateItem(id, "qty", qty + -1);
//     }
//   };
//   return (
//     <tr>
//       <th> {sl + 1} </th>
//       <td>{name}</td>
//       <td>{price}</td>
//       <td>
//         <span className="flex">
//           {" "}
//           <button onClick={() => decreaseQty(_id)}>-</button>
//           <span className="bg-white px-1 py-1"> {qty} </span>
//           <button onClick={() => increaseQty(_id)}>+</button>{" "}
//         </span>
//       </td>
//       <td>{price * qty}</td>
//       <td>
//         {" "}
//         <button
//           className="btn btn-sm btn-error font-bold text-sm"
//           onClick={() => deleteFromCart(_id)}
//         >
//           {" "}
//           X{" "}
//         </button>{" "}
//       </td>
//     </tr>
//   );
// };

// export default CartRow;

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseQty, deleteFromCartStore } from '../../redux/actions/fruitAction';

const CartRow = ({fruit}) => {
  const dispatch = useDispatch()
  const {_id,name,quantity,picture} = fruit
  return (
    <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={picture}
                      alt={_id}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{name}</div>
                </div>
              </div>
            </td>
            <td>
              <button
              onClick={() => {
                dispatch(decreaseQty(fruit))
              }} 
              className='btn btn-xs btn-success text-sm' >-</button>
              <span className='border py-1 px-3 mx-2'>{quantity}</span>
              <button
              onClick={() => {
                dispatch(addToCart(fruit))
              }}
              className='btn btn-xs btn-success text-sm' >+</button>              
            </td>
            <td>Purple</td>
            <th>
              <button onClick={()=>dispatch(deleteFromCartStore(_id))} className="btn btn-error btn-sm">X</button>
            </th>
          </tr>
  );
};

export default CartRow;