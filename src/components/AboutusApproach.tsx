import { useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

function AboutusApproach() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-full text-zinc-900 bg-[#CDEA68] rounded-xl">
      <div className="pb-[4.2vw] pt-[9vw] px-12">
        <h2 className="text-wrap font-[500] text-[3.3vw] leading-none tracking-[0.8]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h2>
      </div>
      <div className="bg-zinc-700 w-screen h-[1px]"></div>
      <div className="flex gap-12 md:flex-row flex-col items-start justify-around py-[2vw] px-12">
        <div className="flex flex-col items-start gap-8">
          <h2 className="text-5xl">Our approach:</h2>
          <button
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="bg-zinc-700 text-white hover:bg-zinc-900 transition-[all] duration-[0.5] ease-[cubic-bezier(0.85, 0, 0.15, 1)] px-4 py-2 w-[210px] rounded-full relative"
          >
            <div className="inline-block">
              <div className="uppercase flex justify-between items-center gap-1 text-xl">
                <p>read</p>
                <p>more</p>
              </div>
            </div>
            <div className="absolute top-1/2 right-[20px] -translate-y-1/2 tinline-block transition-[all] duration-[0.5] ease-[cubic-bezier(0.85, 0, 0.15, 1)]">
              <div
                className={`w-2 h-2 ${
                  isHovering && "scale-[3.5]"
                } rounded-full bg-white flex justify-center items-center transition-[all] duration-[0.5] ease-[cubic-bezier(0.85, 0, 0.15, 1)]`}
              >
                {isHovering && <IoIosArrowRoundUp style={{width:"100%",height:"100%", color:"black", transform:"rotate(45deg)"}}/>}
              </div>
            </div>
          </button>
        </div>
        <div className="bg-cover rounded-xl bg-center w-full md:w-[50dvw] h-[30dvh] md:h-[60dvh] overflow-hidden mb-[20px] lg:mb-[150px]">
          <div className={`bg-cover rounded-xl bg-center overflow-hidden w-full h-full transition-[all] duration-[1s] ease-[cubic-bezier(0.85, 0, 0.15, 1)] ${
              isHovering && "w-[99%] h-[99%]"
            }`}>
          <img
            className={`w-full h-full object-cover object-center transition-[all] duration-[1s] ease-[cubic-bezier(0.85, 0, 0.15, 1)] ${
              isHovering && "scale-[1.1]"
            }`}
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="img"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusApproach;
