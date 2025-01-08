import React from "react";

const Welcome = ({ msg, slog, emoji }) => {
  return (
    <>
      <div
        className=" h-48 flex flex-col  justify-center items-center gap-6 mt-10 p-2
          "
      >
        <p className="text-5xl font-bold bg-gradient-to-r from-pink-400 via-white to-slate-100 bg-clip-text text-transparent">
          {msg}
        </p>

        {
          emoji && <img src={emoji} alt="not found" className="  w-36" />
        }
        <p className="text-xl font-bold">{slog}</p>
      </div>
    </>
  );
};

export default Welcome;
