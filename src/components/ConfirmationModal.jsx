import { useContext } from "react";
export default function ConfirmationModal() {
  return (
    <div class=" flex justify-center  items-center absolute top-50 right-0 left-0 bottom-0">
      <div class="bg-white px-16 py-14 rounded-md text-center">
        <h1 class="text-xl mb-4 font-bold text-slate-500">
          Do you wish to delete the items?
        </h1>

        <button class="bg-indigo-500 px-7 py-2  rounded-md text-md text-white font-semibold">
          Yes
        </button>
        <button class="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white">
          No
        </button>
      </div>
    </div>
  );
}
