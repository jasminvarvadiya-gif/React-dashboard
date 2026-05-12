import React from "react";
import { Products } from "./Data";
import { StockItems } from "./Data";
import { orders } from "./Data";

const Cards = () => {
  return (
    <>
      <header>
        <div>
          <div className="text py-5">
            <h1 className="text-3xl py-1">Dashboard</h1>
            <p>Your main content goes here…</p>
          </div>
          <div className="card">
            <div className="card-all w-full flex gap-2">
              <div
                className="card-1 py-5  px-5  bg-orange-200 bg-opacity-10 flex gap-4 "
                style={{ width: "25%", borderRadius: "10px   " }}
              >
                <div className="card-icon">
                  <i
                    className="fa-solid fa-bag-shopping text-2xl text-white bg-orange-400 py-2 px-1"
                    style={{ borderRadius: "10px" }}
                  ></i>
                </div>
                <div className="card-text">
                  <p>Total Sales</p>
                  <h1 className="text-2xl font-bold pt-3">$25,000</h1>
                  <p className="text-orange-600">+5% since last month</p>
                </div>
              </div>
              <div
                className="card-2 py-5  px-5  bg-green-200 bg-opacity-10 flex gap-4 "
                style={{ width: "25%", borderRadius: "10px   " }}
              >
                <div className="card-icon">
                  <i
                    className="fa-solid fa-arrow-right-arrow-left text-2xl text-white bg-green-400 py-2 px-1"
                    style={{ borderRadius: "10px" }}
                  ></i>
                </div>
                <div className="card-text">
                  <p>Total Sales</p>
                  <h1 className="text-2xl font-bold pt-3">$18,000</h1>
                  <p className="text-green-600">+5% since last month</p>
                </div>
              </div>
              <div
                className="card-3 py-5  px-5  bg-blue-100 bg-opacity-10 flex gap-4 "
                style={{ width: "25%", borderRadius: "10px   " }}
              >
                <div className="card-icon">
                  <i
                    className="fa-solid fa-dollar-sign text-2xl text-white bg-blue-400 py-2 px-1"
                    style={{ borderRadius: "10px" }}
                  ></i>
                </div>
                <div className="card-text">
                  <p>Total Sales</p>
                  <h1 className="text-2xl font-bold pt-3">$9,000</h1>
                  <p className="text-blue-600">+5% since last month</p>
                </div>
              </div>
              <div
                className="card-4 py-5  px-5  bg-yellow-100 bg-opacity-10 flex gap-4 "
                style={{ width: "25%", borderRadius: "10px   " }}
              >
                <div className="card-icon">
                  <i
                    className="fa-solid fa-dollar-sign text-2xl text-white bg-yellow-400 py-2 px-1"
                    style={{ borderRadius: "10px" }}
                  ></i>
                </div>
                <div className="card-text">
                  <p>Total Sales</p>
                  <h1 className="text-2xl font-bold pt-3">$9,000</h1>
                  <p className="text-yellow-600">+5% since last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="card py-5">
          <div className="card-all w-full flex justify-between ">
            <div className="card-1 border rounded-xl" style={{ width: "32%" }}>
              <div className="text-ixon px-5 flex content-between w-full  py-5">
                <div className="card-text ">
                  <h1 className="text-2xl font-bold">$25,458</h1>
                  <p>Total Profit</p>
                </div>
                <div className="card-icon block ">
                  <i className="fa-solid fa-clone text-xl text-orange-800"></i>
                </div>
              </div>
              <div className="text-link px-5 py-3 border-t flex justify-between items-center">
                <div className="text">
                  <p>
                    <span className="text-green-500">+35%</span> vs Last Month
                  </p>
                </div>
                <div className="link">
                  <a href="" className="text-orange-700">
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="card-2 border rounded-xl" style={{ width: "32%" }}>
              <div className="text-ixon px-5 flex content-between w-full  py-5">
                <div className="card-text ">
                  <h1 className="text-2xl font-bold">$45,458</h1>
                  <p>Total Profit</p>
                </div>
                <div className="card-icon block ">
                  <i className="fa-solid fa-gauge text-xl text-red-500"></i>
                </div>
              </div>
              <div className="text-link px-5 py-3 border-t flex justify-between items-center">
                <div className="text">
                  <p>
                    <span className="text-red-500">-20%</span> vs Last Month
                  </p>
                </div>
                <div className="link">
                  <a href="" className="text-orange-700">
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="card-2 border rounded-xl" style={{ width: "32%" }}>
              <div className="text-ixon px-5 flex content-between w-full  py-5">
                <div className="card-text ">
                  <h1 className="text-2xl font-bold">$25,458</h1>
                  <p>Total Profit</p>
                </div>
                <div className="card-icon block ">
                  <i className="fa-solid fa-clone text-xl text-yellow-800"></i>
                </div>
              </div>
              <div className="text-link px-5 py-3 border-t flex justify-between items-center">
                <div className="text">
                  <p>
                    <span className="text-yellow-500">-20%</span> vs Last Month
                  </p>
                </div>
                <div className="link">
                  <a href="" className="text-orange-700">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="contan">
            <div className="Data-all w-full h-auto flex gap-5">
              <div
                className="data-one border rounded-xl py-5"
                style={{ width: "50%" }}
              >
                <div className="data-text px-3 border-b pb-4 flex justify-between items-center">
                  <div className="header">
                    <h1 className=" text-xl font-medium">Sales vs Purchase</h1>
                  </div>
                  <div className="text-section">
                    <p>this week</p>
                  </div>
                </div>
                <div className="img">
                  <img src="./imgs/Data.png" alt="" />
                </div>
              </div>

              <div
                className="Data-two border rounded-xl py-5"
                style={{ width: "50%" }}
              >
                <div className="txt-img">
                  <div className="data-text px-3 border-b pb-4 flex justify-between items-center">
                    <div className="header">
                      <h1 className=" text-xl font-medium">
                        Overall Information
                      </h1>
                    </div>
                    <div className="text-section">
                      <p>Last 6 Months</p>
                    </div>
                  </div>
                </div>
                <div className="header px-3 py-5 ">
                  <h1>Customers Overview</h1>
                  <div className="img-text flex my-4  items-center w-full justify-between">
                    <div className="img " style={{ width: "50%" }}>
                      <img src="./imgs/Data-2.png" alt="" />
                    </div>
                    <div
                      className="text w-50 flex items-center gap-5"
                      style={{ width: "50%" }}
                    >
                      <div className="txt-one pe-2 border-e">
                        <h1 className="text-3xl">5.5K</h1>
                        <p className=" text-green-400">First Time</p>
                        <p className=" bg-green-400 border rounded-xl mt-3 text-center">
                          25%
                        </p>
                      </div>
                      <div className="txt-two">
                        <h1 className=" text-3xl">3.5K</h1>
                        <p className=" text-orange-500">Return</p>
                        <p className=" bg-orange-500 text-center mt-3 border rounded-xl">
                          25%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="text">
                  <div className="txt-all flex justify-between  items-center py-5">
                    <div className="txt-one border-e text-center mx-5 pe-5 ">
                      <h1 className="text-3xl py-4 font-bold">6987</h1>
                      <p>Suppliers</p>
                    </div>
                    <div className="txt-two border-e text-center mx-5 pe-5">
                      <h1 className="text-3xl py-4 font-bold">4896</h1>
                      <p>Customers</p>
                    </div>
                    <div className="txt-three text-center mx-5 pe-5">
                      <h1 className="text-3xl py-4 font-bold">487</h1>
                      <p>Orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card map no use  */}
      <section>
        <div className="container py-4">
          <div className="contan">
            <div className="all-box flex gap-3 w-full">
              <div
                className="box-one border py-5 "
                style={{ width: "32%", borderRadius: "10px" }}
              >
                <div className="txt-heardr flex pb-3 justify-between items-center px-4 ">
                  <h1 className=" text-xl font-bold">Top Selling Products</h1>
                  <button className=" hover:bg-gray-400 rounded-xl border py-1 px-4">
                    Today
                  </button>
                </div>
                {Products.map((v, i) => (
                  <div key={i} className="img-item border-t">
                    <div
                      className="item-1 flex justify-around
                     items-center gap-3 px-2 py-2 "
                    >
                      <div className="img" style={{ width: "20%" }}>
                        <img
                          src={v.img}
                          alt={v.name}
                          className=" rounded-xl object-cover"
                        />
                      </div>
                      <div className="txt  w-[60%]">
                        <p className=" text-[13px]">{v.name}</p>
                        <p>
                          ${v.price}, {v.units}{" "}
                        </p>
                      </div>
                      <div className="color w-[20%]">
                        <span className="border px-1 py-1 rounded-xl border-orange-400 bg-orange-200">
                          {v.growth}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* two card width map  */}
              <div
                className="box-two py-5 border rounded-xl"
                style={{ width: "32%" }}
              >
                <div className="txt-heardr flex pb-3 justify-between items-center px-4 ">
                  <h1 className=" text-xl font-bold">Low Stock Products</h1>
                  <button className="text-orange-500 py-1 px-4">View</button>
                </div>
                {StockItems.map((v, i) => (
                  <div key={i} className="img-item border-t">
                    <div
                      className="item-1 flex justify-around
                     items-center gap-3 px-2 "
                    >
                      <div className="img" style={{ width: "20%" }}>
                        <img
                          src={v.img}
                          alt={v.name}
                          className=" rounded-xl object-cover"
                        />
                      </div>
                      <div className="txt w-[60%]">
                        <p className=" text-[13px]">{v.name}</p>
                        <p>ID:{v.id}</p>
                      </div>
                      <div className="color w-[20%]">
                        <h1 className=" text-center text-red-600">
                          0{v.stock}
                        </h1>
                        <h2 className=" text-center">{v.status}</h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* three card map  */}
              <div className="box-three border rounded-xl py-5 " style={{ width: "32%" }}>
                <div className="txt-heardr flex pb-3 justify-between items-center px-4 ">
                  <h1 className=" text-xl font-bold">Recent Sales</h1>
                  <button className=" hover:bg-gray-400 rounded-xl border py-1 px-4">
                    Weekly
                  </button>
                </div>
                {orders.map((v, i) => (
                  <div key={i} className="img-item border-t">
                    <div
                      className="item-1 flex justify-around
                     items-center gap-3 px-2 py-2 "
                    >
                      <div className="img" style={{ width: "20%" }}>
                        <img
                          src={v.img}
                          alt={v.name}
                          className=" rounded-xl object-cover"
                        />
                      </div>
                      <div className="txt w-[50%]">
                        <p className=" text-[13px]">{v.name}</p>
                        <p>
                          ${v.price}, {v.units}{" "}
                        </p>
                      </div>
                      <div className="color w-[30%] mx-2">
                        <span className="border px-2   py-1 text-xm rounded-xl border-orange-400 bg-orange-200">
                          {v.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container py-12.5">
          <div className="conten">
            <div className="last-txt text-center">
              <h1 className=" text-xl">Copyright © 2026 InApp Inventory Dashboard. Developed by <span className=" text-orange-600">CodesCandy</span>• Distributed by <span className=" text-orange-700">ThemeWagon</span></h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Cards;
