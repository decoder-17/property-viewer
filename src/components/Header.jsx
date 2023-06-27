import caeliust2m from "../assets/caeliust2m.png";
import caeliuslogo from "../assets/Caelius_Consulting_PNG.png";
import mulesoft from "../assets/mulesoft.svg";

export default function Header() {
  return (
    <div className="flex bg-white rounded-3xl w-full my-4">
      <div className="logos flex flex-row justify-between items-center w-full">
        <div className="t2mlogo flex">
          <img src={caeliust2m} alt="caeliust2m" className=" h-48" />
        </div>
        <div className="header">
          <h1 className="text-4xl font-semibold  p-4">Property Viewer</h1>
        </div>

        <div className="contributors flex flex-col">
          <div className="caeliuslogo">
            <img src={caeliuslogo} alt="caeliuslogo" className="h-24" />
          </div>
          <div className="mulesoftlogo flex justify-center">
            <img src={mulesoft} alt="mulesoft" className="h-24" />
          </div>
        </div>
      </div>
    </div>
  );
}
