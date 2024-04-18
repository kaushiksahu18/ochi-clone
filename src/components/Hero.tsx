import { motion } from "framer-motion";
import { IoIosArrowRoundUp } from "react-icons/io";

function Hero() {
  return (
    <div className="relative w-full h-full mt-20 md:mt-0 text-zinc-800">
      <div className="pt-[11vw] px-12 pb-[10vw]">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <>
              {index === 1 ? (
                <div className="flex items-center">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "10vw" }}
                    transition={{
                      duration: 0.4,
                      delay: 1,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center w-[14vw] h-[7.5vw] mr-2 inline-block rounded-lg"
                  ></motion.div>
                  <h2
                    key={index}
                    className="inline-block font-['Rubik Mono One'] text-[10vw] md:text-[7vw] leading-[8vw] md:leading-[5.8vw] tracking-[-0.6vw] font-[700]"
                  >
                    {item}
                  </h2>
                </div>
              ) : (
                <h2
                  key={index}
                  className="font-['Rubik Mono One'] text-[10vw] md:text-[7vw] leading-[8vw] md:leading-[5.8vw] tracking-[-0.6vw] font-[700]"
                >
                  {item}
                </h2>
              )}
            </>
          );
        })}
      </div>
      <hr className="bg-zinc-700 h-[2px] my-20 md:my-0 w-screen" />
      <div className="flex flex-col gap-4 items-start md:flex-row mdL:items-center py-4 px-12 justify-between">
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
          <button className="peer font-['Rubik Mono One'] tracking-[-0.04vw] font-[500] uppercase text-[2.5vw] md:text-[1.5vw] lg:text-[1.2vw] border border-zinc-900 bg-transparent py-1 px-3 rounded-full hover:bg-zinc-900 hover:text-white">
            start the project
          </button>
          <IoIosArrowRoundUp
            className="rotate-45 border peer-hover:bg-zinc-900 peer-hover:text-white border-zinc-900 bg-transparent p-1 rounded-full"
            style={{ width: "2em", height: "2em" }}
          />
        </div>
      </div>
      <div className="overflow-hidden absolute left-1/2 -translate-x-1/2 bottom-48 md:bottom-6 font-[600] font-['Rubik Mono One'] tracking-[-0.07vw] text-md text-zinc-400">
        <motion.h4
          initial={{ y: "0%" }}
          animate={{ y: ["-23%", "80%"] }} // Animate from initial position to 80% down
          transition={{
            duration: 1,
            ease: [0.12, 0, 0.39, 0],
            repeat: Infinity,
            repeatDelay: 0.8,
            repeatType: "loop", // Reverse the animation sequence
          }}
        >
          Scroll down
        </motion.h4>
      </div>
    </div>
  );
}

export default Hero;
