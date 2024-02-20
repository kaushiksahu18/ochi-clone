import "../app.css";
import Logoforfooter from "../assets/Logoforfooter";

function ContectUs() {
  return (
    <div className="w-full h-full border rounded-lg py-[5vw] relative flex">
      <div className="w-1/2 inline-block px-12 relative">
        <h2 className="text-[6vw] font-[600] leading-[0.8] tracking-[-0.5vw]">
          EYE-{" "}
        </h2>
        <h2 className="text-[6vw] font-[600] leading-[0.8] tracking-[-0.5vw]">
          OPENING
        </h2>
      </div>
      <div className="w-1/2 inline-block flex-col relative">
        <h2 className="text-[6vw] font-[600] leading-[0.8] tracking-[-0.5vw]">
          PRESENTATIONS
        </h2>
        <div className="flex flex-col relative top-12">
          <h3 className="relative">S:</h3>
          {"baad me kar dunga".split(" ").map((item, index) => {
            return (
              <span key={index} className="capitalize underline">
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className="absolute left-[2vw] bottom-[2vw]"><Logoforfooter /></div>
    </div>
  );
}

export default ContectUs;
