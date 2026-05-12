import React from "react";

const Reportspage = () => {
  return (
    <>
      <header>
        <div className="container py-5">
          <div className="conten">
            <div className="txt">
              <h1 className="text-3xl py-2">Reports</h1>
              <p>View your inventory analytics and reports</p>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="conten">
            <div className="txt-border w-full flex justify-between items-center">
              <div className="one-box border-gray-400 rounded-xl border w-[23%]">
                <p className=" pt-5 px-5">Total Revenue</p>
                <h1 className="text-3xl px-5 py-3 font-bold">$45,231</h1>
                <p className="text-green-500 pb-5 px-5"> 12% from last month</p>
              </div>
              <div className="one-box border-gray-400 rounded-xl border w-[23%]">
                <p className=" pt-5 px-5">Products Sold</p>
                <h1 className="text-3xl px-5 py-3 font-bold">1,234</h1>
                <p className="text-green-500 pb-5 px-5"> 8% from last monthh</p>
              </div>
              <div className="one-box border-gray-400 rounded-xl border w-[23%]">
                <p className=" pt-5 px-5">Low Stock Items</p>
                <h1 className="text-3xl px-5 py-3 font-bold">23</h1>
                <p className="text-red-500 pb-5 px-5"> 3% from last month</p>
              </div>
              <div className="one-box border-gray-400 rounded-xl border w-[23%]">
                <p className=" pt-5 px-5">Out of Stock</p>
                <h1 className="text-3xl px-5 py-3 font-bold">5</h1>
                <p className="text-green-500 pb-5 px-5"> 2% from last monthh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-5">
        <div className="container py-5">
          <div className="conten">
            <div className="chart-main border border-gray-500 rounded-xl">
              <div className="txt-btn flex justify-between py-5 px-5 items-center">
                <div className="txt font-bold text-xl">
                  <h1>Sales Overview</h1>
                </div>
                <div className="btn ">
                  <button className=" me-3 px-2 py-1 bg-gray-700 rounded text-white">
                    Randomize Data
                  </button>
                  <button className="bg-orange-600 text-white rounded py-1 px-2">
                    Show This Year Only
                  </button>
                </div>
              </div>
              <div className="chart py-5">
                <div className="img">
                  <img src="/imgs/chart.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="conter">
            <div className="box border border-gray-500 px-5 py-5 w-full rounded-xl">
              <div className="txt text-2xl">
                <h1>Top Products</h1>
              </div>
              <div className="txt-img w-full py-5 flex justify-between items-center border-b">
                <div className="img-main w-[50%] flex items-center gap-4">
                  <div className="img w-[15%]">
                    <img
                      src="/imgs/product-1.png"
                      alt=""
                      className=" rounded-xl"
                    />
                  </div>
                  <div className="img-txt">
                    <h1 className=" text-xl">Gaming Joy Stick</h1>
                    <p>156 units sold</p>
                  </div>
                </div>
                <div className="txt-main pe-10">
                  <div className="txt">
                    <h1 className="text-xl font-bold">$3,120</h1>
                  </div>
                </div>
              </div>

              <div className="txt-img w-full py-5 flex justify-between items-center border-b">
                <div className="img-main w-[50%] flex items-center gap-4">
                  <div className="img w-[15%]">
                    <img
                      src="/imgs/product-2.png"
                      alt=""
                      className=" rounded-xl"
                    />
                  </div>
                  <div className="img-txt">
                    <h1 className=" text-xl">Product B Wireless Headphones</h1>
                    <p>134 units sold</p>
                  </div>
                </div>
                <div className="txt-main pe-10">
                  <div className="txt">
                    <h1 className="text-xl font-bold">$2,680</h1>
                  </div>
                </div>
              </div>

              <div className="txt-img w-full py-5 flex justify-between items-center border-b">
                <div className="img-main w-[50%] flex items-center gap-4">
                  <div className="img w-[15%]">
                    <img
                      src="/imgs/product-3.png"
                      alt=""
                      className=" rounded-xl"
                    />
                  </div>
                  <div className="img-txt">
                    <h1 className=" text-xl">Smartwatch</h1>
                    <p>98 units sold</p>
                  </div>
                </div>
                <div className="txt-main pe-10">
                  <div className="txt">
                    <h1 className="text-xl font-bold">$1,960</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reportspage;
