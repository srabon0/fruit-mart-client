// import React from "react";
// import { useNavigate } from "react-router-dom";
// import useCart from "../../components/Hooks/useCart";
// import CartRow from "./CartRow";

// const Cart = () => {
//   const [cart] = useCart();
//   const navigate = useNavigate();

//   const initialValue = 0;
//   const amountTotal = cart.reduce(
//     (accumulator, current) => accumulator + current.price * current.qty,
//     initialValue
//   );
//   console.log(amountTotal);

//   return (
//     <div className="w-2/3 mx-auto">
//       {cart.length ? (
//         <table className="table table-zebra w-full">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Fruit Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart?.map((item, index) => (
//               <CartRow key={index} item={item} sl={index}></CartRow>
//             ))}

//             {amountTotal > 0 ? (
//               <tr>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td>Total</td>
//                 <td>{amountTotal}</td>
//                 <button
//                   onClick={() => {
//                     navigate("/shipping-details");
//                   }}
//                   className="btn btn-secondary btn-sm my-3 ml-2"
//                 >
//                   place order
//                 </button>
//               </tr>
//             ) : (
//               <></>
//             )}
//           </tbody>
//         </table>
//       ) : (
//         <div className="w-2/3 mx-auto my-10">
//           <div className="card w-full bg-orange-600 text-white">
//             <div className="card-body items-center text-center">
//               <h2 className="card-title">Sorry!</h2>
//               <p>Cart is Empty</p>
//               <div className="card-actions justify-end">
//                 <button
//                   onClick={() => {
//                     navigate("/");
//                   }}
//                   className="btn btn-dark"
//                 >
//                   Return to home
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
