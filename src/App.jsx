import "./App.css";
import React, { useState } from "react";
import Explorer from "./components/Explorer";
import Sidebar from "./components/Sidebar";
import Instructions from "./components/Instructions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FileDrop from "./components/FileDrop";

export const GlobalContext = React.createContext();

function App() {
  const initialState = {
    Procedures: ["Procedure(null)", "Procedure(null)"],
    RenderConfigs: ["RenderConfig(null)", "RenderConfig(null)"],
    Severity: [
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
    ],
    Severities: ["Severity(null)", "Severity(null)"],
    Types: ["Type(null)", "Type(null)"],
    Category: [
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
    ],
    Applications: ["Application(null)", "Application(null)"],
    CLEMigration: [
      "Applications(null)",
      "Categories(null)",
      "Types(null)",
      "Severities(null)",
      "Procedures(null)",
      "ExceptionConfigs(null)",
      "RenderConfigs(null)",
    ],
    Categories: ["Category(null)", "Category(null)"],
    ExceptionConfig: [
      "ApplicationID(string)",
      "ExceptionCode(string)",
      " Description(string)",
      "CategoryID(string)",
      "TypeID(string)",
      "SeverityID(string)",
      "ProcedureID(string)",
      "NotificationChnl(string)",
      "Rolename(string)",
      "ReplyDestination(string)",
      "EmailTo(string)",
      "EmailCC(string)",
      "ExceptionTtl(string)",
      "Instruction(string)",
      "ResolveDelayInterval(string)",
      "EventType(string)",
      "ApplicationID(string)",
      "ExceptionCode(string)",
      "Description(string)",
      "CategoryID(string)",
      "TypeID(string)",
      "SeverityID(string)",
      "ProcedureID(string)",
      "NotificationChnl(string)",
      "Rolename(string)",
      "ReplyDestination(string)",
      "EmailTo(string)",
      "EmailCC(string)",
      "ExceptionTtl(string)",
      "Instruction(string)",
      "ResolveDelayInterval(string)",
      "EventType(string)",
      "ApplicationID(string)",
      "ExceptionCode(string)",
      "Description(string)",
      "CategoryID(string)",
      "TypeID(string)",
      "SeverityID(string)",
      "ProcedureID(string)",
      "NotificationChnl(string)",
      "Rolename(string)",
      "ReplyDestination(string)",
      "EmailTo(string)",
      "EmailCC(string)",
      "ExceptionTtl(string)",
      "Instruction(string)",
      "ResolveDelayInterval(string)",
      "EventType(string)",
    ],
    Procedure: [
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "Destination(string)",
      "PhysicalName(string)",
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "Destination(string)",
      "PhysicalName(string)",
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "Destination(string)",
      "PhysicalName(string)",
    ],
    Application: [
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
    ],
    Type: [
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
      "ID(string)",
      "ApplicationID(string)",
      "Name(string)",
      "Description(string)",
    ],
    ExceptionConfigs: ["ExceptionConfig(null)", "ExceptionConfig(null)"],
    RenderConfig: [
      "ApplicationID(string)",
      "RenderID(string)",
      "XSLT(string)",
      "CSS(string)",
      "ApplicationID(string)",
      "RenderID(string)",
      "XSLT(string)",
      "CSS(string)",
      "ApplicationID(string)",
      "RenderID(string)",
      "XSLT(string)",
      "CSS(string)",
    ],
  };
  // const [open, setOpen] = useState();
  return (
    <GlobalContext.Provider value={initialState}>
      <Router>
        <div className="h-screen">
          <div className="home flex flex-grow h-screen">
            <Sidebar />
            <div className="main flex flex-grow h-screen w-screen">
              <Routes>
                {/* <Route path="/" element={<Explorer />} /> */}
                <Route path="/" element={<FileDrop />} />
                <Route path="/instructions" element={<Instructions />} />
                <Route path="/explorer" element={<Explorer />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
