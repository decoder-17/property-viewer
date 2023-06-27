import caeliust2m from "../assets/caeliust2m.png";
import caeliuslogo from "../assets/Caelius_Consulting_PNG.png";
import mulesoft from "../assets/mulesoft.svg";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const activeStyle =
    "text-xl font-semibold py-2 px-4 bg-blue-500 rounded-full align-middle my-2 text-white";
  const inactiveStyle = "text-xl font-semibold p-2 my-2 align-middle ";

  return (
    <div className="logos flex flex-col justify-between items-center bg-white rounded-3xl m-4 max-w-sm">
      <div className="t2mlogo flex flex-col ">
        <img src={caeliust2m} alt="caeliust2m" className=" h-48 rounded-full" />
        <h1 className="text-2xl font-semibold p-4">Property Viewer</h1>
      </div>
      <div className="header flex flex-col">
        <ul>
          <li className={splitLocation[1] === "" ? activeStyle : inactiveStyle}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              splitLocation[1] === "instructions" ? activeStyle : inactiveStyle
            }
          >
            <Link to="/instructions">About</Link>
          </li>
        </ul>
      </div>
      <div className="contributors flex flex-col">
        <div className="caeliuslogo flex justify-center">
          <img src={caeliuslogo} alt="caeliuslogo" className="h-20" />
        </div>
        <div className="mulesoftlogo flex justify-center">
          <img src={mulesoft} alt="mulesoft" className="h-20 mb-4" />
        </div>
      </div>
    </div>
  );
}
