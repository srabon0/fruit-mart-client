import React from "react";

const RowDataModal = ({ index, order }) => {
  const { _id, item } = order;
  return (
    <>
      <input type="checkbox" id={index} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-lg">Item Details</h3>
          <small className="font-bold">Order Id : <span className="badge badge-sm bg-red-200 border-none text-black">{_id}</span></small>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {item.map((it, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-6 h-6">
                          <img src={it.picture} alt={it._id} />
                        </div>
                      </div>
                    </td>
                    <td>{it.name}</td>
                    <td>{it.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-action">
            <label htmlFor={index} className="btn btn-sm btn-warning">
              close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RowDataModal;
