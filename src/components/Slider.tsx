import { motion } from "framer-motion";

function Slider() {
  return (
    <div className="bg-[#004D43] w-full py-16 rounded-3xl">
      <div className="flex whitespace-nowrap border border-y-2 border-x-0 border-[#909090]">
        {[0, 1].map((item) => {
          return (
            <motion.h1
              key={item}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
              className="px-4 uppercase text-white font-[800] leading-none tracking-[-1.5vw] text-[25vw] whitespace-nowrap"
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
