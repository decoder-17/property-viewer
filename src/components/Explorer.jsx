import { useContext, useState } from "react";
import { GlobalContext } from "../App";

export default function Explorer() {
  const data = useContext(GlobalContext);
  console.log(data);
  const { filesList, setFilesList } = useState(data);
  return (
    <div className="bg-white mt-20 w-full min-h-full rounded-3xl">
      <div
        className={
          "flex flex-col p-4 bg-gray-200 border-2 border-red m-4 ml-32 w-72  shadow-3xl rounded-2xl"
        }
      ></div>
      {Object.keys(data).map((item, index) => {
        return (
          <div key={index}>
            <div>{item}</div>
            <div>{item}</div>
          </div>
        );
      })}
    </div>
  );
}
