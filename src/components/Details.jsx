import { useContext } from "react";
import { GlobalContext } from "../App";

export default function Details(item) {
  const data = useContext(GlobalContext);

  return (
    <div className=" mx-20 flex-col overflow-scroll-y scroll-smooth h-full">
      <h3 className="m-4 font-semibold text-black-900 dark:text-black text-center">
        Contents
      </h3>
      {Object.values(data[item.item]).map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-row p-4 bg-gray-100 border-2 mx-auto border-red m-4 ml-32 max-w-sm overflow-x-auto ustify-between shadow-3xl rounded-2xl text-center"
          >
            <div
              c
              className="font-medium leading-none mx-4 text-black-100 items-center"
            >
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
}
