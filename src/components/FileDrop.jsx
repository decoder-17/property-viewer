import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FilesListContext } from "../App";

export default function FileDrop() {
  const { itemsList, setItemsList } = useContext(FilesListContext);
  const [submit, setSubmit] = useState(false);
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  let filesToUpload = new FormData();
  const handleChange = (e) => {
    setFiles([...files, e.target.files[0]]);
  };

  const handleFileUpload = () => {
    filesToUpload.append("file", files[0]);
    axios
      .post("http://66.29.155.220:8080/tibco/xsd/upload", filesToUpload)
      .then((response) => {
        if (response.status === 200) {
          let items = JSON.parse(response.data.data);
          setItemsList(Object.values(items.array));
          navigate("/explorer");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-grow flex-col justify-center align-middle bg-white my-4 mx-8 p-4 rounded-3xl ">
      <main className="flex items-center justify-center align-middle font-sans">
        <label
          htmlFor="dropzone-file"
          className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>

          <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
            Files to Transform
          </h2>

          <p className="mt-2 text-gray-500 tracking-wide">
            Click to Upload or Drag & Drop your .ear, .xsd files.{" "}
          </p>

          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => {
              handleChange(e);
            }}
            multiple
          />
        </label>
      </main>
      <div className="options flex flex-row justify-center m-4 ">
        <div className="automatic m-4">
          <label htmlFor="auto" className="cursor-pointer">
            {" "}
            <input type="radio" name="choice" id="auto" className="mx-2" />
            Automatic Conversion of RAML
          </label>
        </div>
        <div className="manual m-4">
          <label htmlFor="manual" className="cursor-pointer">
            {" "}
            <input type="radio" name="choice" id="manual" className="mx-2" />
            Manual Modification of RAML
          </label>
        </div>
      </div>
      <div className="submit flex items-center">
        <div
          className="max-w-md mx-auto my-8 flex justify-center"
          onClick={() => {
            setSubmit(!submit);
            handleFileUpload();
          }}
        >
          <button
            className="group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-center cursor-pointer h-12 border-2 border-solid py-0 px-6 rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-blue-500 text-white border-blue-500 hover:text-blue-500 focus:text-blue-500"
            disabled={submit ? true : false}
          >
            {submit ? (
              <div role="status" className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <strong className="font-medium">Submit</strong>
              </div>
            ) : (
              <strong className="font-medium">Submit</strong>
            )}

            <span className="absolute bg-white bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
