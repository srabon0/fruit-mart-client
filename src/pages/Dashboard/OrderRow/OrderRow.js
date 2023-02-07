import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import loadAllOrders from "../../../redux/thunk/fetchOrder";

const OrderRow = ({ order, index, modalOrder }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userState.authUser);
  const verifyDone = (data) => {
    toast(data);
  };
  const initiatePayment = (id) => {
    const url = "https://fruit-mart-server.onrender.com/payment/ssl-request/" + id;
    // window.location.replace(url);
    window.open(url, "_blank");
  };

  const verifyPayment = async (orderId) => {
    console.log("verify payment", orderId);
    const url = "https://fruit-mart-server.onrender.com/payment/verify";
    const { data } = await axios.post(url, { order_id: orderId });
    if(data.result.modifiedCount){
      verifyDone(data?.message);
      dispatch(loadAllOrders());
      
    }
  };
  const confirmShipment = async (orderId) => {
    console.log("verify payment", orderId);
    const url = "https://fruit-mart-server.onrender.com/api/v1/orders/confirm-shipping";
    const { data } = await axios.post(url, { order_id: orderId });
    if(data.result.modifiedCount){
      verifyDone(data?.message);
      dispatch(loadAllOrders());
      
    }
  };

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
    shipment_status,
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
      {/* admin  */}
      {currentUser.role == "Admin" && (
        <>
          <td className="flex">
            {!payment && currentUser.role == "Admin" && (
              <button
                className="btn btn-warning text-white btn-sm"
              >
                Unpaid
              </button>
            )}
            
            {payment == "pending" &&
              transaction_id &&
              currentUser.role == "Admin" && (
                <div>
                  <button
                    onClick={() => verifyPayment(_id)}
                    className="btn btn-success text-white btn-sm"
                  >
                    Verify
                  </button>
                  <br />
                  <p className="badge badge-ghost badge-sm">
                    txnid : {transaction_id}
                  </p>
                  <br />
                  <p className="badge badge-ghost badge-sm">
                    Date: {payment_date.split("T")[0]}
                  </p>
                </div>
              )}
            {payment == "paid" && transaction_id && (
              <div>
                <button
                  // onClick={()=>verifyPayment(_id)}
                  className="btn bg-green-600 border-0 text-white btn-sm"
                >
                  Paid
                </button>
                <br />
                <p className="badge badge-ghost badge-sm">
                  txnid : {transaction_id}
                </p>
                <br />
                <p className="badge badge-ghost badge-sm">
                  Date: {payment_date.split("T")[0]}
                </p>
              </div>
            )}
            {transaction_id && payment == "paid" &&
              currentUser.role == "Admin" &&
              !shipment_status && (
                <div>
                  <button
                    onClick={() => confirmShipment(_id)}
                    className="btn bg-orange-600 border-0 text-white btn-sm"
                  >
                    Confirm Shipping
                  </button>
                </div>
              )}
          </td>
        </>
      )}

      {/* admin end  */}

      {/* user */}
      {currentUser.role == "user" && (
        <>
          <td className="flex">
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
            { payment == "pending" &&
              transaction_id &&
              currentUser.role == "user" && (
                <div>
                  <button className="btn btn-warning text-white btn-sm">
                    Pending
                  </button>
                  <br />
                  <p className="badge badge-ghost badge-sm">
                    txnid : {transaction_id}
                  </p>
                  <br />
                  <p className="badge badge-ghost badge-sm">
                    Date: {payment_date.split("T")[0]}
                  </p>
                </div>
              )}
              {payment == "paid" &&
              transaction_id &&
              currentUser.role == "user" && (
                <div>
                  <button className="btn btn-success text-white btn-sm">
                    Paid
                  </button>
                  <br />
                  <p className="badge badge-ghost badge-sm">
                    txnid : {transaction_id}
                  </p>
                  <br />
                  <p className="badge badge-ghost badge-sm">
                    Date: {payment_date.split("T")[0]}
                  </p>
                </div>
              )}
          </td>
        </>
      )}

      {/* user end  */}

      {!shipment_status && (
        <th>
          <button className="btn btn-error text-white btn-sm">Cancel</button>
        </th>
      )}
      {shipment_status && (
        <th>
          <button className="btn btn-error text-white btn-sm">
            {currentUser.role == "Admin" ? "Deliverd" : "Received"}
          </button>
        </th>
      )}
    </tr>
  );
};

export default OrderRow;
