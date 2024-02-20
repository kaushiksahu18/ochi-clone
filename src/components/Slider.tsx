import { motion } from "framer-motion";

function Slider() {
  return (
    <div className="bg-[#004D43] w-full py-16 rounded-3xl">
      <motion.div initial={{x:0}} animate={{x:"100%"}}  className="w-full tracking-[-1.7vw] text-white whitespace-nowrap uppercase text-[23vw] leading-[0.8] font-[700] font-['Rubik Mono One'] border border-t-[1px] border-b-[1px] border-l-0 border-r-0 border-[#999999]">
        We are ochi
      </motion.div>
    </div>
  );
}

export default Slider;
