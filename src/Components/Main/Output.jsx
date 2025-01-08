import React, { useContext } from "react";
import { BiUser } from "react-icons/bi";
import brain from "../../assets/eye.gif";
import { BrainContextProvider } from "../../context/BrainContext";

const Output = ({ img, userInput, output, loading }) => {
  // const { isloading } = useContext(BrainContextProvider);
  return (
    <div className="p-2 pt-3   mt-10 ps-5 ">
      <div className="title flex items-end  gap-2 justify-end">
        <pre className="text-[12px] bg-white rounded-md text-slate-900 p-2 max-w-[400px] text-wrap">
          {userInput}
        </pre>
        {img ? (
          <img
            src={img}
            alt="not found"
            className="w-5 h-5 object-cover  rounded-full "
          />
        ) : (
          <div className=" p-2 rounded-full bg-white text-slate-900">
            <BiUser />
          </div>
        )}
      </div>

      <div className="output  flex gap-4 mt-4 ">
      <img
          src={brain}
          alt="not found"
          className="w-8 h-5 border bg-white rounded-xl "
        />
        {loading ? (
          "Thinking . . ."
        ) : (
          <pre
            className=" text-wrap   w-full text-slate-200"
            dangerouslySetInnerHTML={{ __html: output }}
          ></pre>
        )}
      </div>
    </div>
  );
};

export default Output;
