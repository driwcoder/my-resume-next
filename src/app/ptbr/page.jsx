import BoxUm from "@/app/components/box1_br/page";
import "./style.css";
import BoxDois from "@/app/components/box2_br/page";
import Document from "../_documents";

export default function Ptbr() {
  return (
    <div className='home'>
      <div className='home-content forma'>
        <Document />
        <div className='lS'>
          <BoxUm />
        </div>
        <div className="rS">
          <BoxDois />
        </div>
      </div>
    </div>
  );
}

