function FeaturedProjects() {
  const img1 = "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png";
  const img2 = "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg";
  return (
    <div className="w-[100dvw] h-[130dvh] bg-[#f7f7f7bf] pt-[15vw] px-12 mb-[2.5vw] bg-sky-400">
      <h2 className="text-5xl font-[400] leading-none tracking-tight text-zinc-700">Featured projects</h2>
      <div className="w-[100vw] h-[1px] bg-zinc-700 mb-[4vw] mt-[5vw]"></div>
      <div className="bg-green-400 mt-[2vw]">
        {[img1, img2].map((item, index) => {
          return (
            <div key={index} className="w-[40%] h-full inline-block ">
              <div className="object-cover object-center rounded-lg">
                <img src={item} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedProjects;
