import React, {useState} from "react";
// import PkgInterface from "../../components/PackageInterface/PkgInterface"
import CoverPage from "../../components/Cover/CoverPage"
import Footer from "../../components/Footer/Footer";
import PackageNav from "../../components/PackageNav/PackageNav";
// import Button from "../../components/Button/ClickButton";
import BookForm from "../../components/BookForm/BookForm";  
import Information from "../../components/DetailParts/Informtion";
import TourPlan from "../../components/DetailParts/TourPlan";
import Location from "../../components/DetailParts/Location";
import Gallery from "../../components/DetailParts/Gallery";
import DetailsBg from "../../assets/Landscapes.png"
import Snitch from "../../assets/sni.png"
// import PackageCard from "../../components/PackageCard/PackageCard";
import TravLug from "../../assets/travLug.png"
import bgImg from "../../assets/details.png"
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoImagesOutline } from "react-icons/io5";
function DetailsPage(){

    // create a state for storing teh selected option
    const [selectedOption,setSelectedOption] = useState("info")
    console.log(selectedOption)

    // handles the options change
    const handleOptionChange = (option)=>{
        setSelectedOption(option);
        
    }

    const renderContent = ()=>{
        switch (selectedOption) {
            case "info":
                return <Information/>;  
            case "plan":
                return <TourPlan/>;  
            case "location":
                return <Location/>;  
            case "gallery":
                return <Gallery/>;
            default:
                return null     
        }
    }

    // icons
    const icons = {
        IoIosInformationCircleOutline,
        CiCalendar,
        IoLocationOutline,
        IoImagesOutline,
    }

    // names
    const names = {
        FCol:"Information",
        SCol:"Tour Plan",
        TCol:"Location",
        FORCol:"Gallery",
    }
    
    return(
        <>
        <div className="w-full">
            <div className="">
            <CoverPage bgImg={bgImg} label={DetailsBg}/>
            </div>
            {/* inner container */}
            <div className=" relative  md:px-28 lg:px-64">
                <img className="absolute md:right-0 md:top-16 lg:right-16 lg:top-16  md:w-32" src={Snitch} alt="" />
            <div className="relative z-20 md:-top-14 w-4/4  ">
                
                {/* sort options */}
               <PackageNav icons={icons} names={names} handleOption={handleOptionChange}/>

                {/* divide  into two*/}
                <div className="flex md:p-2 lg:p-7 bg-white flex-col mf:flex-row ">
                    {/* 1st part */}
                <div className="w-2/3 ">
                    {renderContent()}

                </div >
               
                {/* second part */}
                <div className="w-2/6 flex flex-col">

                    {/* plan youre trip */}
                    <div className=" md:w-full flex flex-col space-y-5 pt-4 items-center bg-[#EDEDED]">
                        {/* heads */}
                        <div className=" flex flex-col items-center">
                            <h1 className="font-bold   text-[#181E4B]">Book This Tour</h1>
                            <p className="font-light">Details</p>
                        </div>

                        {/* inputs */}
                        <BookForm/>
                    </div>  

                    {/* bottom image */}
                    <div className="mt-10">
                        <img src={TravLug} alt="" />
                    </div>
                </div>
                </div>

            </div>
            </div>

            {/* Footer */}
            <div>
            <Footer/>
            </div>
        </div>
        
        </>
    )
}

export default DetailsPage;