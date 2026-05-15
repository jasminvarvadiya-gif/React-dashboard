import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Data } from "./Product";

const Inventorycom = () => {
  return (
    <>
      {/* Header */}
      <header>
        <div className="container mx-auto px-4 py-8">

          <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">

            <div>
              <h1 className="text-2xl md:text-4xl font-bold">
                Inventory
              </h1>

              <p className="text-gray-500 text-sm md:text-base">
                Manage your product inventory
              </p>
            </div>

            <Link to="/addProduct">
              <button className="bg-orange-500 text-white px-5 py-3 rounded-lg w-full md:w-auto">
                Add Product
              </button>
            </Link>

          </div>
        </div>
      </header>

      {/* Search + Filter */}
      <section>
        <div className="container mx-auto px-4">

          <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">

            <input
              type="search"
              placeholder="Search product..."
              className="border p-3 rounded-lg w-full md:w-[300px]"
            />

            <div className="flex flex-wrap gap-2">

              <button className="border px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                Filter
              </button>

              <button className="border px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                Excel
              </button>

              <button className="border px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                PDF
              </button>

            </div>

          </div>


          {/* Table */}
          <div className="overflow-x-auto mt-6 rounded-lg border">

            <table className="min-w-full">

              <thead className="bg-gray-300">

                <tr>

                  <th className="p-4 text-left">
                    Image
                  </th>

                  <th className="p-4">
                    Code
                  </th>

                  <th className="p-4">
                    Category
                  </th>

                  <th className="p-4">
                    Brand
                  </th>

                  <th className="p-4">
                    Price
                  </th>

                  <th className="p-4">
                    Unit
                  </th>

                  <th className="p-4">
                    Quantity
                  </th>

                  <th className="p-4">
                    Action
                  </th>

                </tr>

              </thead>


              <tbody>

                {Data.map((v, id) => (

                  <tr
                    key={id}
                    className="border-b hover:bg-gray-100 text-center"
                  >

                    <td className="flex items-center gap-3 p-4 min-w-[180px]">

                      <img
                        src={v.image}
                        alt=""
                        className="w-10 h-10 rounded"
                      />

                      <span>
                        {v.name}
                      </span>

                    </td>


                    <td>
                      {v.code}
                    </td>

                    <td>
                      {v.category}
                    </td>

                    <td>
                      {v.brand}
                    </td>

                    <td>
                      ${v.price}
                    </td>

                    <td>
                      {v.unit}
                    </td>

                    <td>
                      {v.quantity}
                    </td>


                    <td className="flex justify-center gap-4 py-5">

                      <FaEdit className="text-blue-500 cursor-pointer text-lg" />

                      <FaTrash className="text-red-500 cursor-pointer text-lg" />

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      </section>
    </>
  );
};

export default Inventorycom;