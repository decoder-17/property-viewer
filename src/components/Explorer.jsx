import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import Details from "./Details";

export default function Explorer() {
  const data = useContext(GlobalContext);
  const [itemsList, setItemsList] = useState(data);
  const [viewDetails, setViewDetails] = useState(false);
  const [showDetails, setShowDetails] = useState();
  const [checkedItems, setCheckedItems] = useState({});
  const [itemsToRemove, setItemsToRemove] = useState([]);

  function removeItem() {
    for (let i = 0; i < itemsToRemove.length; i++) {
      delete itemsList[itemsToRemove[i]];
    }
    setItemsList({ ...itemsList });
    itemsToRemove.pop();
  }

  useEffect(() => {
    setItemsList(data);
  }, [data]);

  function handleCheckboxChange(item) {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [item]: !prevCheckedItems[item],
    }));

    setItemsToRemove((prevItemsToRemove) => {
      if (prevItemsToRemove.includes(item)) {
        return prevItemsToRemove.filter((value) => value !== item);
      } else {
        return [...prevItemsToRemove, item];
      }
    });
  }

  return (
    <div className=" bg-white mt-8 w-full p-4 rounded-3xl items-center">
      <div className="flex flex-row justify-around">
        <div className="flex-1">
          {Object.keys(itemsList).map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row p-4 bg-gray-200 border-2 mx-auto border-red m-4 ml-32 max-w-sm justify-between shadow-3xl rounded-2xl items-center"
              >
                <input
                  type="checkbox"
                  id={item}
                  value=""
                  onChange={() => handleCheckboxChange(item)}
                  checked={checkedItems[item]}
                  className="appearance-none h-6 w-6 p-4 mx-4 bg-gray-400 rounded-full 
            checked:bg-blue-600 checked:scale-75
            transition-all duration-200 peer"
                />
                <div className="font-medium leading-none mx-4 text-black-100 items-center">
                  {item}
                </div>

                <button
                  className={
                    viewDetails
                      ? showDetails === item
                        ? "text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        : "text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      : "text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  }
                  type="button"
                  onClick={() => {
                    setViewDetails((prev) => !prev);
                    setShowDetails(item);
                  }}
                >
                  {viewDetails
                    ? showDetails === item
                      ? "Hide"
                      : "View"
                    : "View"}
                </button>
              </div>
            );
          })}
        </div>
        <div>{viewDetails && <Details item={showDetails} />}</div>
      </div>

      <div
        className="max-w-md mx-auto space-y-6 m-6 flex justify-center"
        onClick={() => {
          if (
            window.confirm(
              `The selected items will be removed. Please click on "OK" to confirm.`
            )
          ) {
            removeItem();
            window.alert("The items have been removed.");
          } else {
            window.alert("The items have not been removed.");
          }
        }}
      >
        <a
          target="_blank"
          className="group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-center cursor-pointer h-12 border-2 border-solid py-0 px-6 rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-blue-500 text-white border-blue-500 hover:text-blue-500 focus:text-blue-500"
        >
          <strong className="font-medium">Submit</strong>
          <span className="absolute bg-white bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]"></span>
        </a>
      </div>
    </div>
  );
}
