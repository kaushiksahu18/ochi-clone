import { IoIosArrowRoundUp } from "react-icons/io";

function AboutusApproach() {
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
          <button className="border-2 bg-zinc-700 text-white hover:bg-zinc-900 px-4 py-2 w-[170px] rounded-full border-zinc-700 relative flex items-center">
            <div className="inline-block">
              <div className="uppercase flex justify-between items-center gap-1 text-xl">
                <p>read</p>
                <p>more</p>
              </div>
            </div>
            <div className="absolute top-1/2 right-[20px] -translate-y-1/2 tinline-block">
              <div className="w-2 h-2 hover:scale-[3.5] rounded-full bg-white flex justify-center items-center">
                <IoIosArrowRoundUp
                  className="rotate-45 bg-transparent p-1 rounded-full"
                  style={{ width: "2em", height: "2em" }}
                />
              </div>
            </div>
          </button>
        </div>
        <div className="bg-cover rounded-xl bg-center w-[55%] h-[80%] overflow-hidden lg:mb-[150px]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutusApproach;
