import { IoIosArrowRoundUp } from "react-icons/io";

function Hero() {
  return (
    <div className="relative w-full h-full text-zinc-800">
      <div className="pt-[11vw] px-12 pb-[10vw]">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <>
              {index === 1 ? (
                <div className="flex items-center">
                  <div className="bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center w-[10vw] h-[5.5vw] mr-2 inline-block rounded-lg"></div>
                  <h2
                    key={index}
                    className="inline-block font-['Rubik Mono One'] text-[7vw] leading-[5.8vw] tracking-[-0.6vw] font-[700]"
                  >
                    {item}
                  </h2>
                </div>
              ) : (
                <h2
                  key={index}
                  className="font-['Rubik Mono One'] text-[7vw] leading-[5.8vw] tracking-[-0.6vw] font-[700]"
                >
                  {item}
                </h2>
              )}
            </>
          );
        })}
      </div>
      <hr className="bg-zinc-700 h-[2px] w-screen" />
      <div className="flex items-center py-2 px-12 justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <h3
              key={index}
              className="font-[500] font-['Rubik Mono One'] tracking-[-0.07vw] text-md"
            >
              {item}
            </h3>
          );
        })}
        <div className="flex items-center gap-2">
          <button className="font-['Rubik Mono One'] tracking-[-0.04vw] font-[500] uppercase text-[1vw] border border-zinc-900 bg-transparent py-1 px-3 rounded-full hover:bg-zinc-900 hover:text-white">
            start the project
          </button>
          <button>
            <IoIosArrowRoundUp
              className="rotate-45 border border-zinc-900 bg-transparent p-1 rounded-full"
              style={{ width: "2em", height: "2em" }}
            />
          </button>
        </div>
      </div>
      <h4 className="absolute left-1/2 -translate-x-1/2 bottom-6 font-[600] font-['Rubik Mono One'] tracking-[-0.07vw] text-md text-zinc-400">Scroll down</h4>
    </div>
  );
}

export default Hero;
