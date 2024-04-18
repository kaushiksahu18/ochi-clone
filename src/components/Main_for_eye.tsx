import Eyes from "./Eyes";

function Main_for_eye() {
  return (
    <div className="hidden md:block w-full h-[90%]">
        <div className="object-cover object-center w-full h-full flex justify-center items-center relative">
            <img className="w-full" src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg" alt="img" />
            <Eyes num={2}/>
        </div>
    </div>
  )
}

export default Main_for_eye;