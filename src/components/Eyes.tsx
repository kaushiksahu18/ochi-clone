function Eyes() {
  return (
    <div className="w-[100dvw] h-[100dvh] flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-[600px] h-[310px] relative">
        {["l-eye", "r-eye"].map((item, index) => {
          return (
            <div
              key={index}
              id={item}
              className={`w-[200px] h-[200px] bg-white rounded-[200vw] absolute top-1/2 ${
                index === 1 ? "left-[16%]" : "left-[55%]"
              } -translate-y-1/2`}
            >
              <div className="w-[60%] h-[60%] bg-zinc-800 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[100%] h-[15%] bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[15%] h-[100%] bg-zinc-800 rounded-full absolute left-0"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Eyes;
