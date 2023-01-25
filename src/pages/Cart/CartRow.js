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
