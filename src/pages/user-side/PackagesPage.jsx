import CoverPage from "../../components/Cover/CoverPage"
import label from "../../assets/TravelWithUs.png"
import TravLug from "../../assets/travLug.png"
import PackageCard from "../../components/PackageCard";
import { LuCalendarDays } from "react-icons/lu";
import { FaSortAmountUp } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
function PackagesPage(){
    
    return(
        <div className="w-full">
            <div className="">
            <CoverPage label={label}/>
            </div>
            {/* inner container */}
            <div className=" px-64">
            <div className="relative z-20 -top-14 w-4/4  ">
                {/* sort options */}
                <div className="flex justify-evenly items-center bg-[#F8F8F8] h-20">
                    <p className="sort-op "><LuCalendarDays /> Date</p>
                    <p className="sort-op "><FaSortAmountUp /> Price Low To High</p>
                    <p className="sort-op "><FaSortAmountDownAlt /> Price High To Low</p>
                    <p className="sort-op "><LuPencilLine /> Name(A-Z)</p>
                </div>

                {/* divide  into two*/}
                <div className="flex p-7 bg-white ">
                    {/* 1st part */}
                <div className="w-2/3  grid grid-cols-2 gap-y-5">
                    <PackageCard/>
                    <PackageCard/>
                    <PackageCard/>
                    <PackageCard/>
                    <PackageCard/>

                </div >
               
                {/* second part */}
                <div className="w-2/6 ">

                    {/* plan youre trip */}
                    <div className="h-2/5 flex flex-col space-y-5 pt-4 items-center bg-[#EDEDED]">
                        {/* heads */}
                        <div className=" flex flex-col items-center">
                            <h1 className="font-bold text-[1.5rem] text-[#181E4B]">Plan Youre Trip</h1>
                            <p className="font-light">Details</p>
                        </div>

                        {/* inputs */}
                        <div className="flex flex-col justify-evenly space-y-2">
                            <input className="filtering " type="text" name="search" id="search" placeholder="Search Tour"/>
                            <input className="filtering " type="text" name="location" id="location" placeholder="Where To" />
                            <input className="filtering " type="date" name="date" id="date" placeholder="Date"/>
                            {/* filtering thing here neeed to create */}

                            <button className="w-24 h-7 border-none rounded-md text-white bg-red-500">Book Now</button>
                        </div>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default PackagesPage;