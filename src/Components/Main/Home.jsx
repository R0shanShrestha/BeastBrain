import React, { useContext, useRef } from "react";
import { BiSend } from "react-icons/bi";
import Welcome from "./Welcome";
import Output from "./Output";
import { BrainContextProvider } from "../../context/BrainContext";
import her from "../../assets/her.png";
import eye from "../../assets/eye.gif";

const Home = () => {
  const {
    BrainStorage,
    onSent,
    input,
    setInput,
    result,
    newSession,
    isloading,
    Recent,
  } = useContext(BrainContextProvider);

  return (
    <div className="w-full flex flex-col    md:p-5 overflow-hidden justify-between">
      <div className="flex justify-between md:justify-center items-center  p-3 md:p-2 bg-slate-200 text-slate-900 md:bg-transparent md:text-white extraFont w-full">
        <h1 className="hidden md:flex text-2xl font-bold extraFont ">
          Welcome to Beast Brain
        </h1>
        <h1 className="md:hidden font-extrabold text-md extraFont uppercase">
          Beast Brain
        </h1>
        <img
          src={her}
          alt="not found"
          className="border flex md:hidden w-10 h-10 cursor-pointer object-cover rounded-full"
        />
      </div>
      <div className="  max-h-[80%]  text-wrap   no-scrollbar overflow-y-scroll ">
        {newSession ? (
          <Welcome
            msg={"Welcome, Sir 💕"}
            slog={"How can i help you today ?"}
          />
        ) : !result ? (
          isloading ? (
            <Output
              img={her}
              brain={eye}
              output={result}
              userInput={Recent}
              loading={isloading}
            />
          ) : (
            <Welcome
              msg={"Welcome, Sir 💕"}
              slog={"How can i help you today ?"}
            />
          )
        ) : (
          <Output
            img={her}
            output={result}
            userInput={Recent}
            loading={isloading}
          />
        )}
      </div>

      <div className="  p-2 flex justify-center gap-2 mb-5  items-center">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key == "Enter" ? onSent() : null;
          }}
          value={input}
          type="text"
          className="w-full p-3 outline-none text-slate-900 rounded-md text-sm"
          placeholder="Search ..."
        />
        <span
          className="border cursor-pointer bg-white text-black p-2.5 rounded-full hover:-rotate-45 transition-all duration-500"
          onClick={() => {
            onSent();
          }}
        >
          <BiSend size={18} />
        </span>
      </div>
    </div>
  );
};

export default Home;
