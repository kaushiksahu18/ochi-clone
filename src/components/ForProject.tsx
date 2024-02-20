import Button from "./Button";

function ForProject() {
  return (
    <div className="w-full h-full relative flex flex-col rounded-lg justify-center items-center bg-[#CDEA68]">
      {["READY", "TO START", "THE PROJECT?"].map((item, index) => {
        return (
          <div
            key={index}
            className='font-["Open_Sans"] font-[900] text-[12vw] leading-[0.8] tracking-[-0.5vw]'
          >
            {item}
          </div>
        );
      })}
      <div className="mt-[4vw]">
        <Button
          bgcolor="bg-zinc-800"
          hbg="bg-zinc-900"
          color="text-white"
          data="start the project"
        />
      </div>
    </div>
  );
}

export default ForProject;
