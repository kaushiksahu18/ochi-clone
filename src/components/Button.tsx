import { IoIosArrowRoundUp } from "react-icons/io";

function Button({
  bgcolor,
  hbg,
  color,
  data,
}: {
  bgcolor: string;
  hbg: string;
  color: string;
  data: string;
}) {
  return (
    <button
      className={`absolute top-[85%] left-1/2 -translate-x-1/2 ${bgcolor} ${color} ${hbg} px-4 py-2 w-[270px] rounded-full flex justify-between items-cente`}
    >
      <div className="inline-block">
        <div className="uppercase flex justify-between items-center gap-1 text-xl">
          {data.split(" ").map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
      <div className="inline-block hover:scale-[3.5] absolute top-1/2 -translate-y-1/2 right-[20px]">
        <div className="w-2 h-2 hover:scale-[1] rounded-full bg-white flex justify-center items-center">
          <IoIosArrowRoundUp
            className="rotate-45 bg-transparent p-1 rounded-full opacity-0 hover:opacity-1"
            style={{ width: "2em", height: "2em", color: "black" }}
          />
        </div>
      </div>
    </button>
  );
}

export default Button;
