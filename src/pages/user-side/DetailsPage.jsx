import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { fetchPackageById } from "../../redux/packageSlice";
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
    
    const {packageId} = useParams();
    const dispatch = useDispatch();
    const {selectedPackage,loading,error} = useSelector((state)=>state.packages)
    // console.log(selectedPackage,"hyhy")

    useEffect(() => {
        dispatch(fetchPackageById(packageId))
    },[dispatch,packageId]);

    // create a state for storing teh selected option
    const [selectedOption,setSelectedOption] = useState("info")

    // handles the options change
    const handleOptionChange = (option)=>{
        setSelectedOption(option);
        
    }

    const renderContent = ()=>{
        switch (selectedOption) {
            case "info":
                return <Information infos={selectedPackage}/>;  
            case "plan":
                return <TourPlan plan={selectedPackage}/>;  
            case "location":
                return <Location place={selectedPackage}/>;  
            case "gallery":
                return <Gallery photos={selectedPackage?.images}/>;
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
                <div className="flex md:p-2 lg:p-7 bg-white flex-col md:flex-row  shadow-sm">
                    {/* 1st part */}
                <div className=" w-full md:w-2/3 ">
                    {renderContent()}

                </div >
               
                {/* second part */}
                <div className="md:w-2/6 hidden md:flex md:flex-col">

                    {/* plan youre trip */}
                    <div className=" md:w-full flex flex-col space-y-5 pt-4 items-center bg-[#EDEDED]">
                        {/* heads */}
                        <div className=" flex flex-col items-center">
                            <h1 className="font-bold   text-customPurple">Book This Tour</h1>
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