const CustomDot = ({ onClick, active, index, carouselState }) => {
    const { currentSlide } = carouselState;
    console.log("first " , currentSlide)
    console.log("second " , active   )
    return (
        <button  className=" flex items-center justify-between" onClick={() => onClick()} >
            <div className={`w-[20px] ${active ? "bg-white" : "bg-gray-500"} mx-1 mb-2 rounded-full h-[20px]`}></div>
        </button>
    );
  };
  
  export default CustomDot;