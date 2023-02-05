import React from "react";
import { useDispatch } from "react-redux";

const OrderRow = ({ order, index, modalOrder }) => {
  const initiatePayment = (id) => {
    const url = "http://localhost:5000/payment/ssl-request/" + id;
    // window.location.replace(url);
    window.open(url, "_blank");
  };
  const dispatch = useDispatch();
  const { setModalOrder } = modalOrder;
  const {
    _id,
    name,
    email,
    subtotal,
    order_date,
    payment,
    transaction_id,
    payment_date,
  } = order;
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
        {!payment && (
          <button
            onClick={() => {
              initiatePayment(_id);
            }}
            className="btn btn-success text-white btn-sm"
          >
            Pay
          </button>
        )}
        {payment && (
          <div>
            <button className="btn btn-success text-white btn-sm">
              Pending
            </button>
            <br/>
            <p className="badge badge-ghost badge-sm">
              txnid : {transaction_id}
            </p>
            <br/>
            <p className="badge badge-ghost badge-sm">
              Date: {payment_date.split("T")[0]}
            </p>
          </div>
        )}
      </td>

      <th>
        <button className="btn btn-error text-white btn-sm">Cancel</button>
      </th>
    </tr>
  );
};

export default OrderRow;
