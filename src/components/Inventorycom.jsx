import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Data } from "./Product";

const Inventorycom = () => {


  return (
    <>
      <header>
        <div className="container py-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl py-1">Inventory</h1>
              <p>Manage your product inventory</p>
            </div>

            <button className="border px-4 py-2 rounded-xl bg-orange-600 text-white font-bold">
              <Link to="/addProduct"> Add Product</Link>
            </button>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="flex justify-between items-center">
            <input
              type="search"
              placeholder="Search product"
              className="border px-3 py-1 rounded-[10px]"
            />

            <div className="flex gap-2">
              <button className="border px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                Filter
              </button>
              <button className="border px-4 py-2 rounded  hover:bg-orange-500 hover:text-white">
                Excel
              </button>
              <button className="border px-4 py-2 rounded  hover:bg-orange-500 hover:text-white">
                PDF
              </button>
            </div>
          </div>

          <div className="mt-5">
            <table className="w-full  p-5 border my-5  ">
              <thead className="py-5">
                <tr className=" bg-gray-400 ">
                  <th className="py-3 text-start ps-3">Image</th>
                  <th>Code</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Unit</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className=" text-center">
                {Data.map((v, id) => (
                  <tr key={id} className=" hover:bg-gray-300 w-50 text-center">
                    <td className=" w- h-full flex items-center gap-2 p-3">
                      <img
                        src={v.image}
                        className="w-10 h-10 rounded"
                      />
                      <span>{v.name}</span>
                    </td>
                    <td>{v.code}</td>
                    <td>{v.category}</td>
                    <td>{v.brand}</td>
                    <td>${v.price}</td>
                    <td>{v.unit}</td>
                    <td>{v.quantity}</td>
                    <td className="flex gap-2 py-4">
                      <FaEdit className="text-blue-500 cursor-pointer" />
                      <FaTrash className="text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                ))};
           
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inventorycom;
