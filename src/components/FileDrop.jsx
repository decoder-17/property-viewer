import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FilesListContext } from "../App";

export default function FileDrop() {
  const { itemsList, setItemsList } = useContext(FilesListContext);
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  let filesToUpload = new FormData();
  const handleChange = (e) => {
    setFiles([...files, e.target.files[0]]);
  };

  const handleFileUpload = () => {
    filesToUpload.append("file", files[0]);
    axios
      .post("http://172.16.5.159:8080/xsd/upload", filesToUpload)
      .then((response) => {
        if (response.status === 200) setItemsList(response.data.data);
        console.log(itemsList);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/explorer");
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
            handleFileUpload();
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
  );
}
