import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Loginpage = () => {

    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")

    const handledata = () =>{
        if(!email || !password){
            alert("enter you Email and password")
        } 
        else if(password.length < 6 ){
            alert("enter a 6 digit code")
        }else{
            alert("successfully login")
        }

    }
  return (
    <>
      <div className="container py-20">
        <div className="conten ">
            <div className="login m-auto border border-gray-600 rounded-xl w-100 px- py-5 ">
                <div className="logo flex gap-2 justify-center items-center">
                    <img src="./imgs/img.png.png" alt="" className="w-[10%]" />
                    <img src="./imgs/text (1).png" alt="" className="w-[15%] h-[15%]" />
                </div>
                <h1 className="text-center ps-5 py-3 text-xl ">Sign in to your account</h1>
                <div className="list px-5 py-5">
                    <label className="text-xl">Email address</label> <br />
                    <input type="email"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                      placeholder="name@email.com" className="border mt-3 px-2 py-1 rounded-xs w-full" /> 
                </div>
                <div className="pass px-5 flex gap-37  w-full">
                    <label htmlFor="text" className="text-xl">Password</label>
                   <span className="text-orange-600 ">Forgot Password?</span> 
                </div>
                <div className="input px-5 py-3">
                    <input type="password" 
                    value={password}
                    onChange={(e)=> setpassword(e.target.value)}
                     placeholder="Password" className="border px-3 py-1 w-full rounded-xs "/>
                </div>
                <div className="check px-5 ">
                    <input type="checkbox" name="txt" id="check" />
                    <label htmlFor="text" className="ps-2">Remember me</label>
                </div>
           <Link to={"/"}>     
            <div className="btn py-5 px-5">
                    <button 
                    onClick={handledata}
                    className=" bg-orange-500 text-white w-full text-center py-2 rounded-xl text-xl" >Sign ing</button>
                </div></Link>
            </div>
            <div className="btn">
             
                <button className=" bg-orange-500 px-3 py-2 rounded-2xl text-white absolute top-10 left-10 text-xm"><Link to={"/"}><i className="fa-solid fa-angle-left text-xl"></i>Go to deshborad</Link></button>
            </div>
        </div>
      </div>

    </>
  );
};

export default Loginpage;
