import "./App.css";
import React, { useState } from "react";
import Explorer from "./components/Explorer";
import Sidebar from "./components/Sidebar";
import Instructions from "./components/Instructions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FileDrop from "./components/FileDrop";

export const FilesListContext = React.createContext();

function App() {
  const [itemsList, setItemsList] = useState({});
  return (
    <FilesListContext.Provider value={{ itemsList, setItemsList }}>
      <Router>
        <div className="h-screen">
          <div className="home flex flex-grow h-screen">
            <div className="my-4 mx-2">
              <Sidebar />
            </div>
            <div className="main flex flex-grow h-screen w-screen">
              <Routes>
                <Route path="/" element={<FileDrop />} />
                <Route path="/instructions" element={<Instructions />} />
                <Route path="/explorer" element={<Explorer />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </FilesListContext.Provider>
  );
}

export default App;
