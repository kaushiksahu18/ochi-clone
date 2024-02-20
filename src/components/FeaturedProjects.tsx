import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

function FeaturedProjects() {
  const img1 =
    "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png";
  const img2 =
    "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg";
  const transition = `transition-[all] duration-[0.6s]`;

  const [word, setWord] = useState("");
  const [isHoveringforBTN, setIsHoveringforBTN] = useState(false);
  const [isHoveringforCard, setIsHoveringforcard] = useState(false);

  return (
    <div className="w-[100dvw] h-[135dvh] bg-[#f7f7f7bf] pt-[5vw] px-12 mb-[1vw] relative">
      <h2 className="text-5xl font-[400] leading-none tracking-tight text-zinc-700">
        Featured projects
      </h2>
      <div className="w-full h-[1px] mb-[3.5vw] mt-[5vw] bg-zinc-500"></div>
      <div className="w-full h-[80%] relative">
        {[img1, img2].map((item, index) => {
          return (
            <div
              onMouseEnter={() => (
                setWord(`${index === 0 ? "fyde" : "vise"}`),
                setIsHoveringforcard(true)
              )}
              onMouseLeave={() => (setWord(""), setIsHoveringforcard(false))}
              key={index}
              className={`w-[49%] h-[70%] inline-block absolute ${
                index === 0 ? "left-0" : "right-0"
              }`}
            >
              <div
                className={`w-[100%] h-[100%] hover:scale-[0.95] overflow-hidden rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center ${transition}`}
              >
                <img
                  className={`hover:scale-[1.15] ${transition}`}
                  src={item}
                  alt=""
                />
              </div>
            </div>
          );
        })}
        {isHoveringforCard && (
          <h3
            className={`uppercase z-[1] text-[#CDEA68] text-[8vw] font-[700] font-["Rubik Mono One"] absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-[50%] pointer-events-none`}
          >
            {word.split("").map((item, index) => {
              return (
                <motion.span
                  initial={{ y: "-100vw" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.65, 0, 0.35, 1],
                    delay: index * 0.1,
                  }}
                  key={index}
                >
                  {item}
                </motion.span>
              );
            })}
          </h3>
        )}
      </div>
      <button
        onMouseEnter={() => setIsHoveringforBTN(true)}
        onMouseLeave={() => setIsHoveringforBTN(false)}
        className="bg-zinc-700 text-white hover:bg-zinc-900 transition-[all] duration-[0.5] ease-[cubic-bezier(0.85, 0, 0.15, 1)] px-4 py-2 w-[300px] rounded-full absolute bottom-[5vw] left-1/2 -translate-x-1/2"
      >
        <div className="inline-block">
          <div className="uppercase flex justify-between items-center gap-1 text-xl">
            <p>view</p>
            <p>all</p>
            <p>case</p>
            <p>studies</p>
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
  );
}

export default FeaturedProjects;
