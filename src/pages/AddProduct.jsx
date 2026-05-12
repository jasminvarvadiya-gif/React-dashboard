import React from 'react'
import Navubar from '../Navubar'
import Upernav from '../components/Upernav'
import Productadd from '../components/Productadd'

const AddProduct = ({state}) => {
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
          <Productadd/>
        </div>
      
    </>
  )
}

export default AddProduct
