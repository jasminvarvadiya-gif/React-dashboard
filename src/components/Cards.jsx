import React from "react";
import { Products } from "./Data";
import { StockItems } from "./Data";
import { orders } from "./Data";

const Cards = () => {
  return (
    <>
      <header>
        <div>
          <div className="text py-3 md:py-5 px-2 md:px-0">
            <h1 className="text-2xl md:text-3xl py-1">Dashboard</h1>
            <p className="text-sm md:text-base">Your main content goes here…</p>
          </div>
          <div className="card">
            <div className="card-all w-full flex flex-col sm:flex-col lg:flex-row gap-2 md:gap-3 px-2 md:px-0">
              <div
                className="card-1 py-4 md:py-5 px-4 md:px-5 bg-orange-200 bg-opacity-10 flex gap-3 md:gap-4 w-full sm:w-full lg:w-1/4"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-icon flex-shrink-0">
                  <i
                    className="fa-solid fa-bag-shopping text-xl md:text-2xl text-white bg-orange-400 py-2 md:py-3 px-2 md:px-3"
                    style={{ borderRadius: "10px" }}
                  ></i>
                </div>
                <div className="card-text">
                  <p className="text-xs md:text-sm">Total Sales</p>
                  <h1 className="text-xl md:text-2xl font-bold pt-2 md:pt-3">$25,000</h1>
                  <p className="text-orange-600 text-xs md:text-sm">+5% since last month</p>
                </div>
              </div>
              <div
                className="card-2 py-4 md:py-5 px-4 md:px-5 bg-green-200 bg-opacity-10 flex gap-3 md:gap-4 w-full sm:w-full lg:w-1/4"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-icon flex-shrink-0">
                  <i
                    className="fa-solid fa-arrow-right-arrow-left text-xl md:text-2xl text-white bg-green-400 py-2 md:py-3 px-2 md:px-3"
                    style={{ borderRadius: "10px" }}
                  ></i>
                </div>
                <div className="card-text">
                  <p className="text-xs md:text-sm">Total Sales</p>
                  <h1 className="text-xl md:text-2xl font-bold pt-2 md:pt-3">$18,000</h1>
                  <p className="text-green-600 text-xs md:text-sm">+5% since last month</p>
                </div>
              </div>
              <div
                className="card-3 py-4 md:py-5 px-4 md:px-5 bg-blue-100 bg-opacity-10 flex gap-3 md:gap-4 w-full sm:w-full lg:w-1/4"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-icon flex-shrink-0">
                  <i
                    className="fa-solid fa-dollar-sign text-xl md:text-2xl text-white bg-blue-400 py-2 md:py-3 px-2 md:px-3"
                    style={{ borderRadius: "10px" }}
                  ></i>
                </div>
                <div className="card-text">
                  <p className="text-xs md:text-sm">Total Sales</p>
                  <h1 className="text-xl md:text-2xl font-bold pt-2 md:pt-3">$9,000</h1>
                  <p className="text-blue-600 text-xs md:text-sm">+5% since last month</p>
                </div>
              </div>
              <div
                className="card-4 py-4 md:py-5 px-4 md:px-5 bg-yellow-100 bg-opacity-10 flex gap-3 md:gap-4 w-full sm:w-full lg:w-1/4"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-icon flex-shrink-0">
                  <i
                    className="fa-solid fa-dollar-sign text-xl md:text-2xl text-white bg-yellow-400 py-2 md:py-3 px-2 md:px-3"
                    style={{ borderRadius: "10px" }}
                  ></i>
                </div>
                <div className="card-text">
                  <p className="text-xs md:text-sm">Total Sales</p>
                  <h1 className="text-xl md:text-2xl font-bold pt-2 md:pt-3">$9,000</h1>
                  <p className="text-yellow-600 text-xs md:text-sm">+5% since last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="card py-3 md:py-5 px-2 md:px-0">
          <div className="card-all w-full flex flex-col lg:flex-row justify-between gap-3 md:gap-4">
            <div className="card-1 border rounded-lg md:rounded-xl w-full lg:w-[32%] overflow-hidden">
              <div className="text-ixon px-3 md:px-5 flex content-between w-full py-4 md:py-5">
                <div className="card-text ">
                  <h1 className="text-xl md:text-2xl font-bold">$25,458</h1>
                  <p className="text-sm md:text-base">Total Profit</p>
                </div>
                <div className="card-icon block ">
                  <i className="fa-solid fa-clone text-lg md:text-xl text-orange-800"></i>
                </div>
              </div>
              <div className="text-link px-3 md:px-5 py-2 md:py-3 border-t flex justify-between items-center text-sm md:text-base">
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

            <div className="card-2 border rounded-lg md:rounded-xl w-full lg:w-[32%] overflow-hidden">
              <div className="text-ixon px-3 md:px-5 flex content-between w-full py-4 md:py-5">
                <div className="card-text ">
                  <h1 className="text-xl md:text-2xl font-bold">$45,458</h1>
                  <p className="text-sm md:text-base">Total Profit</p>
                </div>
                <div className="card-icon block ">
                  <i className="fa-solid fa-gauge text-lg md:text-xl text-red-500"></i>
                </div>
              </div>
              <div className="text-link px-3 md:px-5 py-2 md:py-3 border-t flex justify-between items-center text-sm md:text-base">
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

            <div className="card-2 border rounded-lg md:rounded-xl w-full lg:w-[32%] overflow-hidden">
              <div className="text-ixon px-3 md:px-5 flex content-between w-full py-4 md:py-5">
                <div className="card-text ">
                  <h1 className="text-xl md:text-2xl font-bold">$25,458</h1>
                  <p className="text-sm md:text-base">Total Profit</p>
                </div>
                <div className="card-icon block ">
                  <i className="fa-solid fa-clone text-lg md:text-xl text-yellow-800"></i>
                </div>
              </div>
              <div className="text-link px-3 md:px-5 py-2 md:py-3 border-t flex justify-between items-center text-sm md:text-base">
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
        <div className="container py-3 md:py-5 px-2 md:px-0">
          <div className="contan">
            <div className="Data-all w-full h-auto flex flex-col lg:flex-row gap-3 md:gap-5">
              <div
                className="data-one border rounded-lg md:rounded-xl py-4 md:py-5 w-full lg:w-1/2"
              >
                <div className="data-text px-3 md:px-5 border-b pb-3 md:pb-4 flex justify-between items-center">
                  <div className="header">
                    <h1 className=" text-lg md:text-xl font-medium">Sales vs Purchase</h1>
                  </div>
                  <div className="text-section text-xs md:text-sm">
                    <p>this week</p>
                  </div>
                </div>
                <div className="img overflow-x-auto">
                  <img src="./imgs/Data.png" alt="" className="w-full" />
                </div>
              </div>

              <div
                className="Data-two border rounded-lg md:rounded-xl py-4 md:py-5 w-full lg:w-1/2"
              >
                <div className="txt-img">
                  <div className="data-text px-3 md:px-5 border-b pb-3 md:pb-4 flex justify-between items-center">
                    <div className="header">
                      <h1 className=" text-lg md:text-xl font-medium">
                        Overall Information
                      </h1>
                    </div>
                    <div className="text-section text-xs md:text-sm">
                      <p>Last 6 Months</p>
                    </div>
                  </div>
                </div>
                <div className="header px-3 md:px-5 py-3 md:py-5 text-sm md:text-base">
                  <h1>Customers Overview</h1>
                  <div className="img-text flex flex-col md:flex-row my-3 md:my-4 items-center w-full justify-between gap-3 md:gap-0">
                    <div className="img w-full md:w-1/2">
                      <img src="/imgs/Data-2.png" alt="" className="w-full" />
                    </div>
                    <div
                      className="text w-full md:w-1/2 flex items-center gap-3 md:gap-5"
                    >
                      <div className="txt-one pe-2 md:pe-3 border-e py-2 md:py-0">
                        <h1 className="text-2xl md:text-3xl">5.5K</h1>
                        <p className=" text-green-400 text-xs md:text-sm">First Time</p>
                        <p className=" bg-green-400 border rounded-lg md:rounded-xl mt-2 text-center text-xs md:text-sm">
                          25%
                        </p>
                      </div>
                      <div className="txt-two">
                        <h1 className=" text-2xl md:text-3xl">3.5K</h1>
                        <p className=" text-orange-500 text-xs md:text-sm">Return</p>
                        <p className=" bg-orange-500 text-center mt-2 border rounded-lg md:rounded-xl text-xs md:text-sm">
                          25%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="text">
                  <div className="txt-all flex flex-col sm:flex-row justify-between items-center py-3 md:py-5 gap-2 md:gap-0">
                    <div className="txt-one border-e text-center px-2 md:px-5 py-2 md:py-0 w-full sm:w-auto">
                      <h1 className="text-2xl md:text-3xl py-2 md:py-4 font-bold">6987</h1>
                      <p className="text-xs md:text-sm">Suppliers</p>
                    </div>
                    <div className="txt-two border-e text-center px-2 md:px-5 py-2 md:py-0 w-full sm:w-auto">
                      <h1 className="text-2xl md:text-3xl py-2 md:py-4 font-bold">4896</h1>
                      <p className="text-xs md:text-sm">Customers</p>
                    </div>
                    <div className="txt-three text-center px-2 md:px-5 py-2 md:py-0 w-full sm:w-auto">
                      <h1 className="text-2xl md:text-3xl py-2 md:py-4 font-bold">487</h1>
                      <p className="text-xs md:text-sm">Orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-3 md:py-4 px-2 md:px-0">
          <div className="contan">
            <div className="all-box flex flex-col lg:flex-row gap-2 md:gap-3 w-full">
              <div
                className="box-one border py-4 md:py-5 rounded-lg md:rounded-xl w-full lg:w-[32%]"
              >
                <div className="txt-heardr flex pb-2 md:pb-3 justify-between items-center px-3 md:px-4 ">
                  <h1 className=" text-lg md:text-xl font-bold">Top Selling Products</h1>
                  <button className=" text-xs md:text-sm hover:bg-gray-400 rounded-lg md:rounded-xl border py-1 px-2 md:px-4">
                    Today
                  </button>
                </div>
                {Products.map((v, i) => (
                  <div key={i} className="img-item border-t">
                    <div
                      className="item-1 flex justify-around items-center gap-2 md:gap-3 px-2 md:px-3 py-2 "
                    >
                      <div className="img w-1/5 flex-shrink-0">
                        <img
                          src={v.img}
                          alt={v.name}
                          className=" rounded-lg md:rounded-xl object-cover w-full"
                        />
                      </div>
                      <div className="txt w-3/5">
                        <p className=" text-xs md:text-sm">{v.name}</p>
                        <p className="text-xs md:text-sm">
                          ${v.price}, {v.units}{" "}
                        </p>
                      </div>
                      <div className="color w-1/5 flex-shrink-0">
                        <span className="border px-1 py-1 rounded-lg md:rounded-xl border-orange-400 bg-orange-200 text-xs md:text-sm">
                          {v.growth}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="box-two py-4 md:py-5 border rounded-lg md:rounded-xl w-full lg:w-[32%]"
              >
                <div className="txt-heardr flex pb-2 md:pb-3 justify-between items-center px-3 md:px-4 ">
                  <h1 className=" text-lg md:text-xl font-bold">Low Stock Products</h1>
                  <button className="text-orange-500 text-xs md:text-sm py-1 px-2 md:px-4">View</button>
                </div>
                {StockItems.map((v, i) => (
                  <div key={i} className="img-item border-t">
                    <div
                      className="item-1 flex justify-around items-center gap-2 md:gap-3 px-2 md:px-3 py-2"
                    >
                      <div className="img w-1/5 flex-shrink-0">
                        <img
                          src={v.img}
                          alt={v.name}
                          className=" rounded-lg md:rounded-xl object-cover w-full"
                        />
                      </div>
                      <div className="txt w-3/5">
                        <p className=" text-xs md:text-sm">{v.name}</p>
                        <p className="text-xs md:text-sm">ID:{v.id}</p>
                      </div>
                      <div className="color w-1/5 flex-shrink-0">
                        <h1 className=" text-center text-red-600 text-xs md:text-sm">
                          0{v.stock}
                        </h1>
                        <h2 className=" text-center text-xs md:text-sm">{v.status}</h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="box-three border rounded-lg md:rounded-xl py-4 md:py-5 w-full lg:w-[32%]">
                <div className="txt-heardr flex pb-2 md:pb-3 justify-between items-center px-3 md:px-4 ">
                  <h1 className=" text-lg md:text-xl font-bold">Recent Sales</h1>
                  <button className=" text-xs md:text-sm hover:bg-gray-400 rounded-lg md:rounded-xl border py-1 px-2 md:px-4">
                    Weekly
                  </button>
                </div>
                {orders.map((v, i) => (
                  <div key={i} className="img-item border-t">
                    <div
                      className="item-1 flex justify-around items-center gap-2 md:gap-3 px-2 md:px-3 py-2 "
                    >
                      <div className="img w-1/5 flex-shrink-0">
                        <img
                          src={v.img}
                          alt={v.name}
                          className=" rounded-lg md:rounded-xl object-cover w-full"
                        />
                      </div>
                      <div className="txt w-1/2">
                        <p className=" text-xs md:text-sm">{v.name}</p>
                        <p className="text-xs md:text-sm">
                          ${v.price}, {v.units}{" "}
                        </p>
                      </div>
                      <div className="color w-1/4 flex-shrink-0 mx-1">
                        <span className="border px-1 py-1 text-xs rounded-lg md:rounded-xl border-orange-400 bg-orange-200">
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
        <div className="container py-8 md:py-12 px-2 md:px-0">
          <div className="conten">
            <div className="last-txt text-center">
              <h1 className=" text-xs md:text-sm lg:text-base">Copyright © 2026 InApp Inventory Dashboard. Developed by <span className=" text-orange-600">CodesCandy</span>• Distributed by <span className=" text-orange-700">ThemeWagon</span></h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Cards;
