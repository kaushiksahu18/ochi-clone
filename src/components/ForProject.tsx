import { IoIosArrowRoundUp } from "react-icons/io";
import { useState } from "react";
import Eyes from "./Eyes";

function ForProject() {

  const [isHoveringforBTN, setIsHoveringforBTN] = useState(false);

  return (
    <div className="w-full h-full relative flex flex-col rounded-lg justify-center items-center bg-[#CDEA68]">
      {["READY", "TO START", "THE PROJECT?"].map((item, index) => {
        return (
          <div
            key={index}
            className='font-["Open_Sans"] font-[900] text-[12vw] leading-[0.8] tracking-[-0.5vw]'
          >
            {item}
          </div>
        );
      })}
      <div className="mt-[4vw]">
      <button
        onMouseEnter={() => setIsHoveringforBTN(true)}
        onMouseLeave={() => setIsHoveringforBTN(false)}
        className="bg-zinc-700 z-[10] text-white hover:bg-zinc-900 transition-[all] duration-[0.5] ease-[cubic-bezier(0.85, 0, 0.15, 1)] px-4 py-2 w-[300px] rounded-full absolute bottom-[5vw] left-1/2 -translate-x-1/2"
      >
        <div className="inline-block">
          <div className="uppercase flex justify-between items-center gap-1 text-xl">
            <p>start</p>
            <p>the</p>
            <p>project</p>
          </div>
        </div>
        <div className="absolute top-1/2 right-[20px] -translate-y-1/2 tinline-block transition-[all] duration-[0.5] ease-[cubic-bezier(0.85, 0, 0.15, 1)]">
          <div
            className={`w-2 h-2 ${
              isHoveringforBTN && "scale-[3.5]"
            } rounded-full bg-white flex justify-center items-center transition-[all] duration-[0.5] ease-[cubic-bezier(0.85, 0, 0.15, 1)]`}
          >
            {isHoveringforBTN && (
              <IoIosArrowRoundUp
                style={{
                  width: "100%",
                  height: "100%",
                  color: "black",
                  transform: "rotate(45deg)",
                }}
              />
            )}
          </div>
        </div>
      </button>
      </div>
      <Eyes num={1}/>
    </div>
  );
}

export default ForProject;
