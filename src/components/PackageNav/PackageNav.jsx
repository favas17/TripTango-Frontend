import React,{useState} from "react"

function PackageNav({icons,names,handleOption}){

 const {IoIosInformationCircleOutline,CiCalendar,IoLocationOutline,IoImagesOutline} = icons


 
    return(
    <div className="flex justify-evenly space-x-1 items-center bg-[#F8F8F8] h-20">




    <div className=" space-y-0 mb-0 w-full flex justify-evenly">
        <button className="nav-btn" onClick={()=> handleOption("info")} ><IoIosInformationCircleOutline/> {names.FCol} 
        </button>
        <button className="nav-btn" onClick={()=> handleOption("plan")}> <IoLocationOutline/> {names.SCol}</button>
        <button className="nav-btn" onClick={()=> handleOption("location")}> <CiCalendar/> {names.TCol}</button>
        <button className="nav-btn" onClick={()=> handleOption("gallery")}> <IoImagesOutline/> {names.FORCol} </button>

    </div>

    </div>
    )
}


export default PackageNav