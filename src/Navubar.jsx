import React from "react";
import "./Navubar.css";
import { Link } from "react-router-dom";

const Navubar = ({s}) => {

  
  return (
    <>
      <div
        className={
          s.side
            ? "deshboard flex w-full fixed min-h-screen -left-60 md:-left-64"
            : "deshboard flex w-full fixed min-h-screen left-0"
        }
      >
        <aside  className="siderbar bg-gray-800 text-white h-screen p-3 md:p-5 transition-all duration-300 overflow-y-auto">
          <div className="container border-b h-auto w-full  ">
            <div className="logo flex w-full h-auto gap-2 content-center items-center py-3 md:py-5 ps-2 md:ps-5 ">
              <div className="logo-img ">
                <img src="./imgs/img.png.png" className="w-6 md:w-auto" alt="" />
              </div>
              <div className="logo-text hidden sm:block">
                <img src="./imgs/text (1).png" alt="" className="w-20 md:w-24" />
              </div>
            </div>
          </div>
          <hr />
          <nav>
            <div className="container-fluid">
              <div className="nav-bar px-2 md:px-4 py-2 md:py-3">
                <h2 className="py-1 font-bold text-sm md:text-xl">Main</h2>

                <div className="nav-list pt-1">
                  <Link
                    to={"/"}
                    className="py-2 px-2 md:px-3 font-medium flex gap-2 md:gap-3 items-center text-xs md:text-sm"
                  >
                    <i className="fa-regular fa-house"></i>
                    <p className="hidden sm:inline">Dashboard</p>
                  </Link>
                </div>

                <div className="nav-list py-1">
                  <Link
                    to="/inventory"
                    className=" py-2 px-2 md:px-3 font-medium flex gap-2 md:gap-3 items-center text-xs md:text-sm"
                  >
                    <i className="fa-regular fa-square-plus"></i>
                    <p className="hidden sm:inline">Inventory</p>
                  </Link>
                </div>

                <div className="nav-list py-1">
                  <Link
                    to="/addProduct"
                    className=" py-2 px-2 font-medium flex gap-2 md:gap-3 items-center text-xs md:text-sm"
                  >
                    <i className="fa-solid fa-plus"></i>
                    <p className=" text-xs md:text-sm hidden sm:inline">Add Product</p>
                  </Link>
                </div>

                <div className="nav-list py-1">
                  <Link
                    to="/reports"
                    className=" py-2 px-2 md:px-3 font-medium flex gap-2 md:gap-3 items-center text-xs md:text-sm"
                  >
                    <i className="fa-solid fa-file-lines"></i>
                    <p className="hidden sm:inline">Reports</p>
                  </Link>
                </div>

                <div className="nav-list py-1">
                  <Link
                    to="/error"
                    className=" py-2 px-2 md:px-3 font-medium flex gap-2 md:gap-3 items-center text-xs md:text-sm"
                  >
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p className="hidden sm:inline">404 Error</p>
                  </Link>
                </div>
                <div className="nav-list py-1">
                  <Link
                    to="/docs"
                    className=" py-2 px-2 md:px-3 font-medium flex gap-2 md:gap-3 items-center text-xs md:text-sm"
                  >
                    <i className="fa-brands fa-dochub"></i>
                    <p className="hidden sm:inline">Docs</p>
                  </Link>
                </div>

                <h2 className="py-1 font-bold text-sm md:text-xl">Account</h2>

                <div className="nav-list py-1">
                  <Link
                    to="/login"
                    className=" py-2 px-2 md:px-3 font-medium flex gap-2 md:gap-3 items-center text-xs md:text-sm"
                  >
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    <p className="hidden sm:inline">log in</p>
                  </Link>
                </div>

                <div className="nav-list py-1">
                  <Link
                    to="/singnup"
                    className=" py-2 px-2 md:px-3 font-medium flex gap-2 md:gap-3 items-center text-xs md:text-sm"
                  >
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <p className="hidden sm:inline">Sing up</p>
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
