import React from "react";
import "./Navubar.css";
import { Link } from "react-router-dom";

const Navubar = ({s}) => {

  
  return (
    <>
      <div
        className={
          s.side
            ? "deshboard flex w-full fixed min-h-screen -left-75"
            : "deshboard flex w-full fixed min-h-screen"
        }
      >
        <aside  className="siderbar bg-gray-800 text-white h-screen p-5 transition-all duration-300 ">
          <div className="container border-b h-auto w-full  ">
            <div className="logo flex w-full h-auto gap-2 content-center items-center py-5 ps-5 ">
              <div className="logo-img ">
                <img src="./imgs/img.png.png" className="" alt="" />
              </div>
              <div className="logo-text">
                <img src="./imgs/text (1).png" alt="" />
              </div>
            </div>
          </div>
          <hr />
          <nav>
            <div className="container-fluid">
              <div className="nav-bar px-4 py-3">
                <h2 className="py-1 font-bold text-xl">Main</h2>

                <div className="nav-list pt-1">
                  <Link
                    to={"/"}
                    className="py-2 px-3 font-medium flex gap-3 items-center text-xm"
                  >
                    <i className="fa-regular fa-house"></i>
                    <p>Dashboard</p>
                  </Link>
                </div>

                <div className="nav-list py-1">
                  <Link
                    to="/inventory"
                    className=" py-2 px-3 font-medium flex gap-3 items-center text-xm"
                  >
                    <i className="fa-regular fa-square-plus"></i>
                    <p>Inventory</p>
                  </Link>
                </div>

                <div className="nav-list py-1">
                  <Link
                    to="/addProduct"
                    className=" py-2 px-2 font-medium flex gap-3 items-center text-xm"
                  >
                    <i className="fa-solid fa-plus"></i>
                    <p className=" text-xm">Add Product</p>
                  </Link>
                </div>

                <div className="nav-list py-1">
                  <Link
                    to="/reports"
                    className=" py-2 px-3 font-medium flex gap-3 items-center text-xm"
                  >
                    <i className="fa-solid fa-file-lines"></i>
                    <p>Reports</p>
                  </Link>
                </div>

                <div className="nav-list py-1">
                  <Link
                    to="/error"
                    className=" py-2 px-3 font-medium flex gap-3 items-center text-xm"
                  >
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p>404 Error</p>
                  </Link>
                </div>
                <div className="nav-list py-1">
                  <Link
                    to="/docs"
                    className=" py-2 px-3 font-medium flex gap-3 items-center text-xm"
                  >
                    <i className="fa-brands fa-dochub"></i>
                    <p>Docs</p>
                  </Link>
                </div>

                <h2 className="py-1 font-bold text-xl">Account</h2>

                <div className="nav-list py-1">
                  <Link
                    to="/login"
                    className=" py-2 px-3 font-medium flex gap-3 items-center text-xm"
                  >
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    <p>log in</p>
                  </Link>
                </div>

                <div className="nav-list py-1">
                  <Link
                    to="/singnup"
                    className=" py-2 px-3 font-medium flex gap-3 items-center text-xm"
                  >
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <p>Sing up</p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navubar;
