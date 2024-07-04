import CoverPage from "../../components/Cover/CoverPage"
import Footer from "../../components/Footer/Footer"
import label from "../../assets/TravelWithUs.png"
import TravLug from "../../assets/travLug.png"
import Snitch from "../../assets/sni.png"
import PackageCard from "../../components/PackageCard/PackageCard";
import { LuCalendarDays } from "react-icons/lu";
import { FaSortAmountUp } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import bgImg from "../../assets/WithusBg.png"

function PackagesPage(){
    
    return(
        <div className="w-full">
            <div className="">
            <CoverPage bgImg={bgImg} label={label}/>
            </div>
            {/* inner container */}
            <div className=" relative  md:px-28 lg:px-64">
                <img className="absolute md:right-0 md:top-16 lg:right-16 lg:top-16  md:w-32" src={Snitch} alt="" />
            <div className="relative z-20 md:-top-14 w-4/4  ">
                {/* sort options */}
                <div className="flex justify-evenly space-x-1 items-center bg-[#F8F8F8] h-20">
                    <p className="sort-op "><LuCalendarDays /> Date</p>
                    <p className="sort-op "><FaSortAmountUp /> Price Low To High</p>
                    <p className="sort-op "><FaSortAmountDownAlt /> Price High To Low</p>
                    <p className="sort-op "><LuPencilLine /> Name(A-Z)</p>
                </div>

                {/* divide  into two*/}
                <div className="flex md:p-2 lg:p-7 bg-white ">
                    {/* 1st part */}
                <div className="w-2/3  grid grid-cols-2 gap-y-3 gap-x-2 md:gap-y-5">
                    <PackageCard/>
                    <PackageCard/>
                    <PackageCard/>
                    <PackageCard/>
                    <PackageCard/>

                </div >
               
                {/* second part */}
                <div className="w-2/6 flex flex-col">

                    {/* plan youre trip */}
                    <div className=" md:w-full flex flex-col space-y-5 pt-4 items-center bg-[#EDEDED]">
                        {/* heads */}
                        <div className=" flex flex-col items-center">
                            <h1 className="font-bold   text-[#181E4B]">Plan Youre Trip</h1>
                            <p className="font-light">Details</p>
                        </div>

                        {/* inputs */}
                        <div className="flex flex-col w-full justify-evenly items-center md:py-6 p-2 space-y-2 md:space-y-4">
                            <input className="filtering " type="text" name="search" id="search" placeholder="Search Tour"/>
                            <input className="filtering " type="text" name="location" id="location" placeholder="Where To" />
                            <input className="filtering " type="date" name="date" id="date" placeholder="Date"/>
                            {/* filtering thing here neeed to create */}

                            <button className="w-24 h-7 border-none rounded-md text-white bg-red-500">Book Now</button>
                        </div>
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
            {/* <div>
            <Footer/>
            </div> */}
        </div>
    )
}

export default PackagesPage;