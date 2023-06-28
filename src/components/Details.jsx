import { useContext } from "react";
import { GlobalContext } from "../App";

export default function Details(item) {
  const data = useContext(GlobalContext);

  return (
    <div className=" flex flex-col h-full pb-4 flex-grow overflow-y-auto scroll-smooth rounded-3xl bg-white mx-6 min-w-full items-center">
      <h3 className="m-4 font-semibold text-black-900 dark:text-black text-center">
        Contents
      </h3>

      {data[item.item] &&
        Object.values(data[item.item]).map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row p-4 bg-gray-100 border-2 border-red mx-32 my-2 max-w-sm  shadow-3xl rounded-2xl"
            >
              <div
                c
                className="font-medium leading-none mx-4 text-black-100 text-center"
              >
                {item}
              </div>
            </div>
          );
        })}
      {}
    </div>
  );
}
