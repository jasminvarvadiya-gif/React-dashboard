import React, { useState } from "react";
import { Link, Links } from "react-router-dom";
import Inventorycom from "./Inventorycom";
import { Data } from "./Product";

const Productadd = () => {
  let [showData, setshowData] = useState({
    uname: "",
    Sku: "",
    price: "",
    Stock: "",
    productimge: "",
    description: "",
  });

  let changeData = (e) => {
    let oldFormData = { ...setshowData };
    let getIntputsName = e.target.name;
    let getIntputsValue = e.target.value;

    oldFormData[getIntputsName] = getIntputsValue;
    //  console.log(oldFormData);
    setshowData(oldFormData);
  };
  const [userData, setuserData] = useState([]);

  let handleData = (e) => {
    e.preventDefault();

    let currentData = {
      uname: showData.uname,
      Sku: showData.Sku,
      price: showData.price,
      Stock: showData.Stock,
      productimge: showData.productimge,
      description: showData.description,
    };

    console.log(currentData);

    let checkinputs = userData.filter(
      (v) =>
        v.uname === showData.uname || v.productimge === showData.productimge,
    );
    if (checkinputs.length >= 1) {
      alert("productimge and name are  already exist");
    } else {
      let olduserData = [...userData, currentData];
      setuserData(olduserData);

      setshowData({
        uname: "",
        Sku: "",
        price: "",
        Stock: "",
        productimge: "",
        description: "",
      });
    }
  };


  
  return (
    <>
      <header>
        <div className="container pt-10">
          <div className="contan">
            <div className="txt-btn flex justify-between items-center">
              <div className="txt">
                <h1 className="text-2xl font-bold">Add Inventory</h1>
                <p>Manage your inventory items</p>
              </div>
              <div className="btn">
                <button className="border-orange-500 rounded-xl bg-orange-500 py-2">
                  <Link to="/inventory" className="px-3 text-white">
                    Go to Inventory List
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container py-5">
          <div className="contan">
            <div className="addproduct border rounded-xl p-5">
              <div className="fist-line flex justify-between gap-2 w-full">
                <div className="name w-[40%]">
                  <label className="text-xl">Product Name</label> <br />
                  <input
                    value={showData.uname}
                    onChange={changeData}
                    type="text"
                    name="uname"
                    placeholder="Enter product name"
                    className=" border py-1 my-2 px-2 w-full rounded"
                  />
                </div>
                <div className="sku w-[40%]">
                  <label className="text-xl">SKU</label>
                  <br />
                  <input
                    type="text"
                    name="Sku"
                    onChange={changeData}
                    value={showData.Sku}
                    placeholder="Enter SKU"
                    className="border my-2 px-2 py-1 w-full rounded"
                  />
                </div>
              </div>
              <div className="secd flex justify-between gap-2 items-center w-full">
                <div className="price w-[40%]">
                  <label className="text-xl">Price</label>
                  <br />
                  <input
                    type="number"
                    className="border my-2 px-2 py-1 w-full rounded"
                    name="price"
                    id="number"
                    value={showData.price}
                    onChange={changeData}
                    placeholder="0.00"
                  />
                </div>
                <div className="stock w-[40%]">
                  <label className="text-xl">Stock Quantity</label>
                  <br />
                  <input
                    value={showData.Stock}
                    onChange={changeData}
                    type="number"
                    name="Stock"
                    id="num"
                    placeholder="0"
                    className="border px-3 my-2 py-1 w-full rounded"
                  />
                </div>
              </div>
              <div className="three-line">
                <label className="text-xl">Category</label>
                <br />
                <select
                  name="country"
                  required
                  className=" rounded border w-full py-2 my-2"
                >
                  <option value="">Select Country</option>
                  <option value="india">Electronics</option>
                  <option value="usa">Food</option>
                  <option value="usa">Clothing</option>
                </select>
              </div>
              <div className="product-img">
                <label className="text-xl">Product Image</label>
                <input
                  type="file"
                  name="pruductimge"
                  value={showData.productimge}
                  onChange={changeData}
                  id=""
                  className="border px-2 py-2 my-2 rounded w-full"
                />
              </div>
              <div className="for">
                <label className="text-xl">Description</label> <br />
                <textarea
                  name="description"
                  value={showData.description}
                  onChange={changeData}
                  id="txt"
                  className="border rounded w-full py-5 my-1"
                ></textarea>
              </div>
              <div className="fiv-btn flex gap-2">
                <button
                  onClick={handleData}
                  className=" bg-orange-500 text-white px-3 py-2 rounded"
                >
                  Add Product
                </button>
                <button className="bg-gray-700 text-white px-3 py-2 rounded">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container py-10">
          <div className="conten text-center">
            <h1>
              Copyright © 2026 InApp Inventory Dashboard. Developed by{" "}
              <span className="text-orange-400">CodesCandy</span> • Distributed
              by <span className="text-orange-400">ThemeWagon</span>
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Productadd;
