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
      alert("Accept Terms & Conditions");
      return;
    }

    alert("Signup Successfully");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

        {/* Back Button */}
        <div className="absolute top-5 left-4 md:left-10">
          <Link to="/">
            <button className="bg-orange-500 text-white px-3 py-2 rounded flex gap-2 items-center text-sm md:text-base">
              <i className="fa-solid fa-angle-left"></i>
              Dashboard
            </button>
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-xl w-full max-w-md md:max-w-lg py-6 px-5">

          {/* Logo */}
          <div className="flex justify-center items-center gap-2 mb-5">
            <img
              src="/imgs/img.png.png"
              alt=""
              className="w-10 md:w-12"
            />

            <img
              src="/imgs/text (1).png"
              alt=""
              className="w-20 md:w-24"
            />
          </div>

          <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">
            Create Your Account
          </h1>

          <form
            onSubmit={handleSignup}
            className="flex flex-col gap-4"
          >

            <div>
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter name"
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
                className="border w-full p-3 rounded mt-1"
              />
            </div>

            <div>
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="border w-full p-3 rounded mt-1"
              />
            </div>

            <div>
              <label>Password</label>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="border w-full p-3 rounded mt-1"
              />
            </div>

            <div>
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm password"
                value={confirmpass}
                onChange={(e) => setconfirmpass(e.target.value)}
                className="border w-full p-3 rounded mt-1"
              />
            </div>

            <div className="flex gap-2 items-start">
              <input
                type="checkbox"
                checked={check}
                onChange={(e) => setcheck(e.target.checked)}
              />

              <p className="text-sm">
                I agree to Terms & Conditions
              </p>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
            >
              Sign Up
            </button>

            <p className="text-center text-sm">
              Already have account?
              <Link
                to="/login"
                className="text-orange-500 ml-1"
              >
                Login
              </Link>
            </p>

          </form>
        </div>
      </div>
    </>
  );
};

export default Department;