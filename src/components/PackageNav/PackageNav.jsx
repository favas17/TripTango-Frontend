import React,{useState} from "react"

function PackageNav({icons,names,handleOption}){

 const {LuPencilLine,LuCalendarDays,FaSortAmountUp,FaSortAmountDownAlt} = icons

 const [isOpen,setIsOpen] = useState(false);

 const toggleNav = ()=>{
    setIsOpen(!isOpen)
 };
 
    return(
    <div className="flex justify-end md:justify-evenly space-x-1 items-center bg-[#F8F8F8] h-full md:h-20">

            <button
                    className=" md:hidden text-black focus:outline-none"
                    onClick={toggleNav}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>


    <div className={`${isOpen ? "block" : "hidden"} space-y-5 mb-2 md:space-y-0 md:mb-0 md:w-full md:flex md:justify-evenly`}>
        <button className="nav-btn" onClick={()=> handleOption("info")} ><LuCalendarDays/> {names.FCol} 
        </button>
        <button className="nav-btn" onClick={()=> handleOption("plan")}> <FaSortAmountUp/> {names.SCol}</button>
        <button className="nav-btn" onClick={()=> handleOption("location")}> <FaSortAmountDownAlt/> {names.TCol}</button>
        <button className="nav-btn" onClick={()=> handleOption("gallery")}> <LuPencilLine/> {names.FORCol} </button>

    </div>

    </div>
    )
}


export default PackageNav