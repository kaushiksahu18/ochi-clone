import { useState } from "react";

import Button from "./Button";

function FeaturedProjects() {
  const img1 =
    "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png";
  const img2 =
    "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg";
  const transition = `transition-[all] duration-[0.6s]`;

  const [word, setWord] = useState("");

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
          className={`uppercase z-[1] text-[#CDEA68] text-[8vw] font-[700] font-["Rubik Mono One"] absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[50%] pointer-events-none`}
        >
          {word.split("").map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </h3>
      </div>
      <Button bgcolor="bg-zinc-800" hbg="hover:bg-zinc-900" color="text-white" data="Viwe all case study" />
    </div>
  );
}

export default FeaturedProjects;
