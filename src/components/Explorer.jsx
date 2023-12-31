import { useContext, useState, useEffect } from "react";
import Details from "./Details";
import ConfirmationModal from "./ConfirmationModal";
import { FilesListContext } from "../App";

export default function Explorer() {
  const { itemsList, setItemsList } = useContext(FilesListContext);
  const [viewDetails, setViewDetails] = useState(false);
  const [showDetails, setShowDetails] = useState();
  const [checkedItems, setCheckedItems] = useState({});
  const [itemsToRemove, setItemsToRemove] = useState([]);

  function removeItem() {
    for (let i = 0; i < itemsToRemove.length; i++) {
      delete itemsList[itemsToRemove[i]];
    }
    setItemsList(...itemsList);
    itemsToRemove.pop();
  }

  useEffect(() => {
    setItemsList(itemsList);
  }, {});

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
    <div className="flex flex-row m-6 p-4 w-full">
      <div className="flex flex-col h-full w-full overflow-y-auto scroll-smooth rounded-3xl bg-white items-center">
        <div>
          <h3 className="m-4 font-semibold text-black-900 dark:text-black">
            Items
          </h3>
          {itemsList.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row p-4 bg-gray-200 border-2  border-red mx-32 my-4 min-w-fit max-w-lg justify-between shadow-3xl rounded-2xl items-center"
              >
                <input
                  type="checkbox"
                  id={Object.keys(item)}
                  value=""
                  onChange={() => handleCheckboxChange(Object.keys(item))}
                  checked={checkedItems[Object.keys(item)]}
                  className="appearance-none h-6 w-6 p-4 mx-4 bg-gray-400 rounded-full 
            checked:bg-blue-600 checked:scale-75
            transition-all duration-200 peer"
                />
                <div className="font-medium leading-none mx-4 text-black-100 items-center">
                  {Object.keys(item)}
                </div>

                <button
                  className={
                    viewDetails
                      ? showDetails === Object.keys(item)
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
                    ? showDetails === Object.keys(item)
                      ? "Hide"
                      : "View"
                    : "View"}
                </button>
              </div>
            );
          })}
          <div
            className="max-w-md mx-auto my-8 flex justify-center"
            onClick={() => {
              if (
                window.confirm(
                  `The selected items will be removed. Please click on "OK" to confirm.`
                )
              ) {
                removeItem();
                window.alert("The items have been removed.");
                // console.log(itemsList);
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
      </div>
      <div className="flex w-full">
        {<Details item={showDetails} view={viewDetails} />}
      </div>

      {/* {open && <ConfirmationModal open={open} setOpen={setOpen} />} */}
    </div>
  );
}
