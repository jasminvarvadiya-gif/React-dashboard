import React from "react";
import Cards from "../components/Cards";
import Upernav from "../components/Upernav";
import Navubar from "../Navubar";
// import Cards from '../components/Cards'
const Dashboard = ({ state }) => {
  return (
    <>
    <Navubar s={state} />
      
        <div
          className={
            state.side
              ? "relative w-full md:absolute md:left-10 md:top-0 md:w-300 transition-all duration-300 px-4 md:px-0" 
              : "relative w-full md:absolute md:left-64 md:top-0 md:w-[calc(100%-260px)] transition-all duration-300 px-4 md:px-0 md:ms-auto md:me-auto"
          }
        >
          <Upernav s1={state} />
          <Cards/>
        </div>
    </>
  );
};

export default Dashboard;
