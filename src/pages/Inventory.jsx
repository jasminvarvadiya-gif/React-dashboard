import React from "react";
import Upernav from "../components/Upernav";
import Navubar from "../Navubar";
import Inventorycom from "../components/Inventorycom";

const Inventory = ({state}) => {
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
          <Inventorycom/>
        </div>
    </>
  );
};

export default Inventory;
