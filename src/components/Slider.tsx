import { motion } from "framer-motion";

function Slider() {
  return (
    <div className="bg-[#004D43] w-full py-16 rounded-3xl">
      <div className="flex whitespace-nowrap border border-y-2 border-x-0 border-[#909090]">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <motion.h1
              key={item}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
              className="uppercase text-white font-[800] leading-none tracking-[-1.5vw] text-[35vw] lg:text-[25vw] whitespace-nowrap"
            >
              we are ochi
            </motion.h1>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
