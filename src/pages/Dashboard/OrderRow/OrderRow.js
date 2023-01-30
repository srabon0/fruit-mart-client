import React from "react";
import { useDispatch } from "react-redux";

const OrderRow = ({ order, index, modalOrder }) => {
  const initiatePayment = (id) => {

    const url = "http://localhost:5000/payment/ssl-request/"+id
    window.location.replace(url);
  };
  const dispatch = useDispatch();
  const { setModalOrder } = modalOrder;
  const { _id, name, email, subtotal, order_date } = order;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <label
          onClick={() => setModalOrder(order)}
          htmlFor="ordermodal"
          className="bg-info text-black text-sm rounded-sm underline px-1 block"
        >
          {_id}
        </label>
        <p className="badge badge-ghost badge-sm">
          Date: {order_date.split("T")[0]}
        </p>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{subtotal}</td>
      <td>
        <button
          onClick={() => {
            initiatePayment(_id);
          }}
          className="btn btn-success text-white btn-sm"
        >
          Pay
        </button>

      </td>

      <th>
        <button className="btn btn-error text-white btn-sm">Cancel</button>
      </th>
    </tr>
  );
};

export default OrderRow;
