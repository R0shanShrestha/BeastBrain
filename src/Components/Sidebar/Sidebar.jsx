import React, { useContext, useState } from "react";
import { BiMessage, BiPlus, BiTime } from "react-icons/bi";
import { BrainContextProvider } from "../../context/BrainContext";
import { IoClose } from "react-icons/io5";
import her from "../../assets/her.png";

const Sidebar = () => {
  const { recentPromt, onSent, setNewSession } =
    useContext(BrainContextProvider);

  const [isRecentMenu, setIsRecentMenu] = useState(false);
  function handleCloseRecentMenu() {
    setIsRecentMenu((prev) => !prev);
    setTimeout(() => {
      setIsRecentMenu(false);
    }, 2000);
  }

  return (
    <div className=" hidden md:flex  p-5 w-[110px] max-w-[200px]  flex-col justify-center  lg:min-w-[250px]">
      <div className="flex justify-center  w-full">
        <h1 className="text-md text-center uppercase font-bold flex gap-4 extraFont ">
          Beast <span className="hidden lg:block extraFont">Brain</span>
        </h1>
      </div>
      <div className="pt-10 w-full ">
        <button
          onClick={() => {
            // setNewSession(true);
          }}
          className="border justify-center w-full border-slate-400 text-slate-400 hover:text-slate-100 hover:border-slate-100 transition-all duration-300 text-sm p-2 rounded-xl flex items-center gap-2"
        >
          {" "}
          <BiPlus size={20} />{" "}
          <span className="hidden lg:block"> New Session</span>
        </button>
      </div>

      <div className="mt-10 flex flex-col     gap-2 h-[70%] overflow-hidden items-center">
        <p
          className="cursor-pointer text-slate-400 hover:text-slate-200 w-full flex gap-3 items-center  justify-center lg:justify-normal"
          onClick={() => {
            handleCloseRecentMenu();
          }}
        >
          <BiTime size={20} className="lg:hidden" />{" "}
          <span className="hidden lg:block lg:text-md lg:font-bold">
            Recent
          </span>
        </p>

        {isRecentMenu && (
          <div className=" w-[200px] lg:hidden  p-2 rounded-b-md rounded-tr-md fixed left-20  bg-white text-slate-900 ">
            <div className=" text-xl font-bold flex justify-end p-1">
              <IoClose
                className="cursor-pointer text-slate-400 hover:text-slate-800"
                onClick={() => {
                  handleCloseRecentMenu();
                }}
              />
            </div>
            <ul className=" flex flex-col no-scrollbar overflow-y-scroll max-h-[300px]">
              {recentPromt != "" ? (
                recentPromt?.map((data, index) => {
                  return (
                    <li
                      key={index}
                      className="shadow-sm rounded-xl cursor-pointer p-2.5 hover:bg-slate-800 hover:text-slate-200 text-[12px] flex gap-2 items-center"
                      onClick={() => {
                        onSent(data);
                      }}
                    >
                      <BiMessage size={15} />
                      {data}
                    </li>
                  );
                })
              ) : (
                <li className="shadow-sm rounded-xl cursor-pointer p-2.5 hover:bg-slate-800 hover:text-slate-200 text-[12px] flex gap-2 items-center">
                  <BiMessage size={15} />
                  No Recent Msg
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="lg:flex  w-full flex-col no-scrollbar overflow-y-scroll hidden">
          {recentPromt?.map((items, index) => {
            return (
              <div
                key={index}
                className="hover:border transition-all duration-300 p-2 rounded-lg  text-sm cursor-pointer"
                onClick={() => {
                  onSent(items);
                }}
              >
                <p className="flex items-center gap-2">
                  <BiMessage size={15} />
                  {items}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="justify-center mb-5 flex gap-2 items-center">
        <img
          src={her}
          alt="not-fount"
          className="w-10 cursor-pointer h-10 rounded-full object-cover border"
        />
        <span>Dev Roshan</span>
      </div>
    </div>
  );
};

export default Sidebar;
