import React, { useState } from "react";
import { Link } from "react-router-dom";

const Department = () => {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const [check, setcheck] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!fullname || !email || !password || !confirmpass) {
      alert("Please fill all fields");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmpass) {
      alert("Passwords do not match");
      return;
    }
    if (!check) {
      alert("Please accept Terms and Conditions");
      return;
    }
    alert("Signup Successfully");
  };

  return (
    <>
      <div className="container py-10">
        <div className="conten">
          <div className="sigup border max-w-md m-auto rounded-xl py-5 shadow-lg">
            <div className="img flex justify-center items-center py-4 gap-3">
              <img src="./imgs/img.png.png" alt="" className="w-[10%]" />
              <img src="./imgs/text (1).png" alt="" className="w-[15%]" />
            </div>
            <div className="txt text-center">
              <h1 className="text-2xl font-semibold">Create your account</h1>
            </div>
            <div className="form">
              <form
               
                className="flex flex-col gap-4 w-[80%] m-auto py-5"
              >
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-2 rounded"
                  value={fullname}
                  onChange={(e) => setfullname(e.target.value)}
                />
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="Confirm Email"
                  className="border p-2 rounded"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Create password"
                  className="border p-2 rounded"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <label>Confirm password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="border p-2 rounded"
                  value={confirmpass}
                  onChange={(e) => setconfirmpass(e.target.value)}
                />
                <div className="check-box flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="box"
                    checked={check}
                    onChange={(e) => setcheck(e.target.checked)}
                  />
                  <label htmlFor="box">
                    I agree to the Terms and Conditions
                  </label>
                </div>
                <Link to={"/"}>
                  <button
                    type="submit"
                    onClick={handleSignup}
                    className="bg-orange-500 text-white py-3 rounded px-4 w-full" >
                    Sign Up
                  </button>
                </Link>
              </form>
            </div>
          </div>
          <div className="deshbord absolute top-5 left-5">
            <Link to="/">
              <button className="bg-orange-500 text-white px-2 py-1 rounded">
                <i className="fa-solid fa-angle-left text-xl "></i>
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
