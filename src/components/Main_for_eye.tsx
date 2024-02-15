import Eyes from "./Eyes";

function Main_for_eye() {
  return (
    <div className="w-full h-full pt-[6vw]">
        <div className="object-cover object-center w-full h-full flex justify-center items-center relative">
            <img className="w-full" src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg" alt="img" />
            <Eyes />
        </div>
    </div>
  )
}

export default Main_for_eye;