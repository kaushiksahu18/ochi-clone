import { useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

function FeaturedProjects() {
  const img1 =
    "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png";
  const img2 =
    "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg";
  const transition = `transition-[all] duration-[0.6s]`;

  const [word,setWord] = useState("");

  return (
    <div className="w-[100dvw] h-[150dvh] bg-[#f7f7f7bf] pt-[5vw] px-12 mb-[1vw] relative">
      <h2 className="text-5xl font-[400] leading-none tracking-tight text-zinc-700">
        Featured projects
      </h2>
      <div className="w-full h-[1px] mb-[3.5vw] mt-[5vw] bg-zinc-500"></div>
      <div className="w-full h-[80%] relative">
        {[img1, img2].map((item, index) => {
          return (
            <div
              onMouseEnter={() => setWord(`${index === 0 ? "fyde" : "vise"}`)}
              onMouseLeave={() => setWord("")}
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
        <h3
          className={`uppercase z-[1] text-[#CDEA68] text-[8vw] font-[700] font-["Rubik Mono One"] absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[50%]`}
        >
          {word.split("").map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </h3>
      </div>
      <button className="absolute bottom-[5%] left-1/2 -translate-x-1/2 border-2 bg-white hover:text-white hover:bg-zinc-900 px-4 py-2 w-[270px] rounded-full border-zinc-700 flex justify-between items-center">
        <div className="inline-block">
          <div className="uppercase flex justify-between items-center gap-1 text-xl">
            <p>viwe</p>
            <p>all</p>
            <p>case</p>
            <p>stude</p>
          </div>
        </div>
        <div className="inline-block hover:scale-[4.2] relative right-[2%]">
          <div className="w-2 h-2 hover:scale-[1] rounded-full bg-white flex justify-center items-center">
            <IoIosArrowRoundUp
              className="rotate-45 bg-transparent p-1 rounded-full opacity-0 hover:opacity-1"
              style={{ width: "2em", height: "2em" , color:"black"}}
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default FeaturedProjects;
