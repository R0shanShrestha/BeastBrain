// import React from "react";

const useDataFormater = (saveResult) => {
  let newResponse = saveResult.split("**");
  let newResponseArr = "";
  for (let i = 0; i < newResponse.length; i++) {
    if (i === 0 || i % 2 !== 1) {
      newResponseArr += newResponse[i];
    } else {
      newResponseArr +=
        "<b class='font-bold text-md text-slate-200 '  >" +
        newResponse[i] +
        "</b>";
    }
  }

  let ReadyResponse = newResponseArr.split("*").join("");
  return ReadyResponse;

  let FinalResponse = ReadyResponse.split(" ");
  // return FinalResponse;
};

export default useDataFormater;
