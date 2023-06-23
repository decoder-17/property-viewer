import "./App.css";
import React from "react";
import Explorer from "./components/Explorer";
import Header from "./components/Header";

export const GlobalContext = React.createContext();

function App() {
  const initialState = {
    Error: {
      Error: ["Code(string)", "Message(string)", "Details(string)"],
      ExceptionRequest: [
        "ExceptionCode(string)",
        "Message(string)",
        "TransactionData(string)",
        "DumpAnalysis(string)",
        "DataEncoding(string)",
        "CorrelationID(string)",
        "Custom(string)",
        "Timeout(string)",
        "ReplyDestination(string)",
        "NotificationChannel(string)",
        "RenderID(string)",
      ],
    },
    LogLevel: ["ApplicationID(string)", "Level(string)"],
    PDFRequest: [
      "PolicyCode(string)",
      "PolicyYear(string)",
      "PolicySuffix(string)",
      "GroupIDN(string)",
      "UserType(string)",
      "UserID(string)",
    ],
    Contacts: ["Contact(null)"],
    policyKeyDetails: ["errorDetails(null)"],
    errorDetails: ["errorDescription(string)", "errorCode(string)"],
    Header: [
      "ApplicationID(string)",
      "ComponentName(string)",
      "Hostname(string)",
      "Timestamp(dateTime)",
      "TransactionDomain(string)",
      "TransactionType(string)",
      "TransactionID(string)",
    ],
    PolicyKey: [
      "policyUnitNumber(string)",
      "policySuffixCode(string)",
      "groupIDN(string)",
      "policyYearDate(string)",
    ],
    RIRRequest: [
      "PolicyKey(null)",
      "UserInformation(null)",
      "VersionNumber(string)",
    ],
    UserInformation: ["userID(string)", "userType(string)"],
    errorDetails: ["errorDescription(string)", "errorCode(string)"],
    STRPDFReqResp: ["errorDetails(null)"],
  };

  return (
    <GlobalContext.Provider value={initialState}>
      <Header />
      <Explorer />
    </GlobalContext.Provider>
  );
}

export default App;
