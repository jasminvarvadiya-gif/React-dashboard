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
              ? "absolute left-10 top-0 w-300 " 
              : "absolute left-70 top-0 w-[75vw] ms-auto me-auto"
          }
        >
          <Upernav s1={state} />
          <Cards/>
        </div>
    </>
  );
};

export default Dashboard;
