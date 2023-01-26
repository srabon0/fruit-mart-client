import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShippingInfo = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [valid, setValid] = useState(true);
  const state = useSelector((state) => state.fruitState);
  const navigate = useNavigate();
  const cart = state.cart;
  const initialValue = 0;
  const cartTotal = cart.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initialValue
  );
  const vat = cartTotal * (15 / 100);
  const shippingfee = 70;
  const subtotal = cartTotal + vat + shippingfee;

  const submitOrder = async (event) => {
    event.preventDefault();
    if ((customerEmail, customerAddress, customerName, customerPhone)) {
      setValid(true);
      const orderObject = JSON.stringify({
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
        address: customerAddress,
        item: cart,
        total: cartTotal,
        vat: vat,
        shippingfee: shippingfee,
        subtotal: subtotal.toFixed(2),
      });
      console.log("order object ", orderObject);
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      };
      const url = "http://localhost:5000/api/v1/orders/place-order";
      const { data } = await axios.post(url, orderObject, { headers: headers });
      console.log(data)
    }
    setValid(false);
  };

  return (
    <div className="container mt-4 max-w-6xl mx-auto">
      <form
        onSubmit={submitOrder}
        className="mx-auto w-2/4 p-4 border border-blue-200 rounded-sm"
      >
        <h3 className="text-xl font-bold underline">Add Shipping Info </h3>
        {/* name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="customer_name"
            placeholder="Name here"
            className="input input-bordered w-full "
            autoComplete="off"
            onKeyUp={(e) => {
              setCustomerName(e.target.value);
            }}
          />
          {!valid && !customerName && (
            <label className="label">
              <span className="label-text-alt text-error">
                Name Can't be Empty
              </span>
            </label>
          )}
        </div>
        {/* email  */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email here"
            className="input input-bordered w-full"
            name="customer_email"
            autoComplete="off"
            onKeyUp={(e) => setCustomerEmail(e.target.value)}
          />
          {!valid && !customerEmail && (
            <label className="label">
              <span className="label-text-alt text-error">
                Email Can't be Empty
              </span>
            </label>
          )}
        </div>
        {/* phone  */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full "
            name="customer_phone"
            autoComplete="off"
            onKeyUp={(e) => setCustomerPhone(e.target.value)}
          />
          {!valid && !customerPhone && (
            <label className="label">
              <span className="label-text-alt text-error">
                Phone Can't be Empty
              </span>
            </label>
          )}
        </div>
        {/* phone  */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Adress</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            name="customer_address"
            autoComplete="off"
            onKeyUp={(e) => setCustomerAddress(e.target.value)}
          />
          {!valid && !customerAddress && (
            <label className="label">
              <span className="label-text-alt text-error">
                Address Can't be Empty
              </span>
            </label>
          )}
        </div>
        <input
          className="btn btn-sm btn-primary"
          type="submit"
          value="Place order"
        />
      </form>
    </div>
  );
};

export default ShippingInfo;
