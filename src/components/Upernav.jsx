import { useState } from "react";

const Upernav = ({ s1 }) => {
  let { side, setSide } = s1;

  const [show, setshow] = useState();

  return (
    <div className="max-w-1170px">
      <div className=" w-full ">
        <nav>
          <div className="conteiner">
            <div className="nav-bar pt-5 flex justify-between items-center w-full">
              <div className="logo">
                <button
                  onClick={() => setSide(!side)}
                  className=" cursor-pointer"
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
              <div className="itme  flex items-center gap-3">
                <i className="fa-regular fa-bell text-xl"></i>
                <img
                  src="./imgs/face.png"
                  alt=""
                  className="w-25 relative cursor-pointer"
                  id="face"
                  onClick={() => setshow(!show)}
                />

                <div
                  className={`absolute top-15 right-0 mt-3 bg-white border px-5 py-5 rounded-xl shadow-lg 
    ${show ? "block" : "hidden"}`}
                >
                  <div className="img-text flex  items-center gap-5 border-b pb-5">
                    <div className="img">
                      <img
                        src="./imgs/face.png"
                        alt=""
                        onClick={() => setshow(!show)}
                        className="w-20"
                      />
                    </div>
                    <div className="txt">
                      <h1>Shrina Tesla</h1>
                      <p>@imshrina</p>
                    </div>
                  </div>
                  <div className="list">
                    <ul className="p-2">
                      <li className=" pb-1  hover:text-orange-400">Home</li>
                      <li className="pb-1  hover:text-orange-400">Imbox</li>
                      <li className=" pb-1  hover:text-orange-400">Chat</li>
                      <li className=" pb-1 hover:text-orange-400">Activity</li>
                      <li className=" hover:text-orange-400">
                        Account Settings
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default Upernav;
