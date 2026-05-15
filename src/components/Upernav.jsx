import { useState } from "react";

const Upernav = ({ s1 }) => {
  let { side, setSide } = s1;

  const [show, setshow] = useState();

  return (
    <div className="w-full">
      <div className="w-full ">
        <nav>
          <div className="conteiner">
            <div className="nav-bar pt-3 md:pt-5 flex justify-between items-center w-full">
              <div className="logo">
                <button
                  onClick={() => setSide(!side)}
        className=" fixed top-4 left-4 z-50   px-3 py-2"
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
              <div className="itme  flex items-center gap-3 md:gap-5">
                <i className="fa-regular fa-bell text-lg md:text-xl"></i>
                <img
                  src="/imgs/face.png"
                  alt=""
                  className="w-8 md:w-10 relative cursor-pointer"
                  id="face"
                  onClick={() => setshow(!show)}
                />

                <div
                  className={`absolute top-12 md:top-15 right-3 md:right-0 mt-2 md:mt-3 bg-white border px-3 md:px-5 py-3 md:py-5 rounded-lg md:rounded-xl shadow-lg z-50
    ${show ? "block" : "hidden"}`}
                >
                  <div className="img-text flex  items-center gap-3 md:gap-5 border-b pb-3 md:pb-5">
                    <div className="img">
                      <img
                        src="/imgs/face.png"
                        alt=""
                        onClick={() => setshow(!show)}
                        className="w-12 md:w-20"
                      />
                    </div>
                    <div className="txt text-sm md:text-base">
                      <h1>Shrina Tesla</h1>
                      <p>@imshrina</p>
                    </div>
                  </div>
                  <div className="list">
                    <ul className="p-2 text-sm md:text-base">
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
