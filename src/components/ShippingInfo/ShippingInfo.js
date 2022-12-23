import React from "react";
import { useState } from "react";

const ShippingInfo = () => {
    const [customerName,setCustomerName] = useState('')
    const [customerEmail,setCustomerEmail] = useState('')
    const [customerPhone,setCustomerPhone] = useState('')
    const [customerAddress,setCustomerAddress] = useState('')
    const [valid,setValid] = useState(false)

const submitOrder = (event) =>{
    event.preventDefault()
    // if(customerEmail,customerAddress,customerName,customerPhone){
        console.log("userInfo",customerName,customerEmail,customerAddress,customerPhone)
    // }
    

}
    

  return (
    <div className="max-w-max mx-auto">
      <form onSubmit={submitOrder} className="w-96">
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
            onBlur={(e)=>{
                console.log(e.target.value)
                setCustomerName(e.target.value)}}
          />
          { valid && customerName &&
            <label className="label">
            <span className="label-text-alt">Name Can't be Empty</span>
          </label>
          }
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
            onBlur={(e)=>setCustomerEmail(e.target.value)}
          />
          {
            valid && customerEmail && <label className="label">
            <span className="label-text-alt">Email Can't be Empty</span>
          </label>
          }
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
            onBlur={(e)=>setCustomerPhone(e.target.value)}
          />
          {
            valid && customerPhone && <label className="label">
            <span className="label-text-alt">Phone Can't be Empty</span>
            </label>
          }
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
            onBlur={(e)=>setCustomerAddress(e.target.value)}
          />
          {
            valid && customerAddress && <label className="label">
            <span className="label-text-alt">Address Can't be Empty</span>
            </label>
          }
        </div>
        <input className="btn btn-sm btn-primary" type="submit" value="Place order" />
      </form>
    </div>
  );
};

export default ShippingInfo;
