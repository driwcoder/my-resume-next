import BoxUm from "@/app/components/box1/page";
import "./style.css";
import BoxDois from "@/app/components/box2/page";

export default function Home() {
  return (
    <div className='home'>
      <div className='home-content forma'>
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

