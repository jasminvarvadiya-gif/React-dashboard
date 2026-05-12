import React from "react";
import Upernav from "../components/Upernav";
import Navubar from "../Navubar";
import Docspag from "../components/Docspag";

const Docs = ({state}) => {
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
          <Docspag/>
        </div>
    </>
  );
};

export default Docs;
