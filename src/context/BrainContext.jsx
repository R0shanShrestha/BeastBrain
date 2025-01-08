import React, { createContext, useEffect, useReducer, useState } from "react";
import { StartBran } from "../config/Brain.js";
import useDataFormater from "../Hooks/useDataFormater.jsx";
import useTyper from "../Hooks/useTyper.js";

export const BrainContextProvider = createContext({
  input: String,
  isloading: Boolean,
  newSession: Boolean,
  Recent: String,
  recentPromt: [],
  onSent: () => {},
  setLoading: () => {},
  setInput: () => {},
  setRecent: () => {},
  setRecentPromt: () => {},
  setNewSession: () => {},
});

const BrainStorageReducer = (initial, action) => {
  let newBrainStorage = initial;
  if (action.type === "NewMsg") {
    // newBrainStorage = [...newBrainStorage, action.payload];
    newBrainStorage = [action.payload];
  }
  return newBrainStorage;
};

const BrainContext = ({ children }) => {
  // Brain storage
  const [BrainStorage, DispatchBrainStorage] = useReducer(
    BrainStorageReducer,
    []
  );

  // Other input and extra states here
  const [input, setInput] = useState();
  const [result, setResult] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [Recent, setRecent] = useState("");
  const [recentPromt, setRecentPromt] = useState([]);
  const [newSession, setNewSession] = useState(false);
  const [error, setError] = useState(false);

  const onSent = async (promt) => {
    if (input !== "" && input !== undefined) {
      // console.log(input);
      // console.log("Loading from input...");
      setRecent(input);
      setInput("");
      setResult("");
      setRecentPromt((pre) => [input, ...pre]);
      setIsloading(true);
      let res = await StartBran(input);
      const modifiedData = useDataFormater(res);
      setResult(modifiedData);
      // modifiedData.map((word) => {
      //   return setResult((pre) => (pre += word + " "));
      // });
      setIsloading(false);
    }

    if (promt !== "" && promt !== undefined) {
      // console.log("Loading from Promt...");/
      setRecent(promt);
      setResult("");
      setIsloading(true);
      let res = await StartBran(promt);
      const modifiedData = useDataFormater(res);
     setResult(modifiedData)
      setIsloading(false);
    }
  };

  // const onSent = async (promt) => {
  //   // console.log("Calling in next");

  //   if (promt !== "" && promt !== undefined) {
  //     setIsloading(true);
  //     let remember = promt;

  //     let res = await StartBran(remember);
  //     console.log(res);
  //     const modifiedData = useDataFormater(res);
  //     DispatchBrainStorage({
  //       type: "NewMsg",
  //       payload: {
  //         brainMsg: modifiedData,
  //         userMsg: remember,
  //       },
  //     });
  //     setIsloading(false);
  //   }
  //   // console.log(BrainStorage);
  //   if (input !== "" && input !== undefined) {
  //     setIsloading(true);
  //     let remember = input;
  //     setInput("");
  //     setRecentPromt((pre) => [remember, ...pre]);
  //     let res = await StartBran(remember);
  //     if (res == "" || res == undefined) {
  //       setError(true);
  //     }

  //     if (error) {
  //       DispatchBrainStorage({
  //         type: "NewMsg",
  //         payload: {
  //           brainMsg: "Something went wrong in My Back 😣 sorry",
  //           userMsg: remember,
  //         },
  //       });
  //       setError(false);
  //     }

  //     const modifiedData = useDataFormater(res);
  //     DispatchBrainStorage({
  //       type: "NewMsg",
  //       payload: {
  //         brainMsg: modifiedData,
  //         userMsg: remember,
  //       },
  //     });
  //     setIsloading(false);
  //   }
  //   // console.log(BrainStorage);
  // };

  return (
    <BrainContextProvider.Provider
      value={{
        BrainStorage,
        onSent,
        setInput,
        isloading,
        setIsloading,
        recentPromt,
        input,
        result,
        newSession,
        setNewSession,
        Recent,
      }}
    >
      {children}
    </BrainContextProvider.Provider>
  );
};

export default BrainContext;
