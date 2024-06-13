import bgImage from "../../assets/LandingPage.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PackageCard from "../../components/PackageCard/PackageCard";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import Offer from "../../components/Offers/Offers";
import guide from "../../assets/tour-guide.png"
import secBg from "../../assets/secbg.png"
import line from "../../assets/Line.png"
import paris from "../../assets/paris.png"
import chat from "../../assets/chat.png"

function UserHome() {
    return (
        <div>
        <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
                    {/* Header */}
                        <Header />

                        {/* landing area */}
            <div className="flex flex-col px-4 md:px-14  py-10 md:py-28">
                <h1 className="text-[2rem]  font-bold w-full md:w-3/5  pb-5 text-white">
                    No matter where you're going to, we will take you there
                </h1>

                {/* search area */}
                <div className="bg-[#B2B9BC] bg-opacity-85 w-full md:w-5/6 lg:w-4/6 h-auto md:h-24 flex flex-col md:flex-row justify-evenly items-center rounded-lg px-5 py-4 md:py-0 space-y-4 md:space-y-0">
                    <input type="text" className="bg-transparent text-white focus:outline-none placeholder-white w-full md:w-auto" name="where-to" placeholder="Where to?" />
                    <select name="" className="bg-transparent text-white w-full md:w-auto" id="">
                        <option value="">Honeymoon</option>
                        <option value="">Family</option>
                        <option value="">Bachelor</option>
                    </select>
                    <input type="text" className="bg-transparent focus:outline-none text-white placeholder-white w-full md:w-auto" name="duration" placeholder="Duration" />
                    <button className="text-white w-24  h-10 rounded-md bg-[#be7566]">Submit</button>
                </div>
            </div>
            
            
        </div>

        {/* offer section */}
        <div className="h-72  md:h-80 lg:h-96 my-5 ">
            <div className="flex justify-center md:mt-6">
            <h1 className="font-bold text-[1.5rem] md:text-[3rem]">We Offer Best Services</h1>
            </div>
        <div className="flex justify-evenly my-10">
        <Offer image={guide} head={"Guided Tours"} details={"Have individual Guides for each tour packages."}/>
        <Offer image={chat} head={"Live Chat"} details={"Chat with the agent live,Know more about package details."}/>
        <Offer image={guide} head={"Guided Tours"} details={"abcdhd"}/>
        <Offer image={guide} head={"Guided Tours"} details={"abcdhd"}/>
        </div>  
        </div>

        {/* designs */}
        <div className="mb-3 md:mb-8">
        <div className="w-full h-72 bg-cover bg-center relative " style={{backgroundImage: `url(${secBg})`}}>
            <div className="ps-9 pt-20 md:ps-40 md:pt-24">
                <h1 className="text-[2rem] text-white font-bold">Let's Make Your <br></br> Next Holiday Amazing</h1>
                <img className="w-28 object-cover " src={line} alt="" />
            </div>
        </div>
        </div>

        {/* Design slide 4 */}
        <div className="relative flex flex-col mb-32 space-y-10 ">
            <div className=" md:ps-10 lg:ps-72">

            <div className="flex flex-col justify-start space-y-3 mb-5">
                <p className="text-red-500 font-bold">Promotion</p>
                <h1 className="text-[#181E4B] font-bold text-[1.5rem] md:text-[2rem]">We Provide You The Best <br /> Europe Sightseeing Toures</h1>
                <p>fdhavhufdisagsaydgsidgaus</p>
                <button className="w-28 h-9 bg-[#DF6951] text-white rounded-md">View Packages</button>
            </div>

            <div className="flex space-x-5">
                <PromotionCard/>
                <PromotionCard/>
                <PromotionCard/>
                <PromotionCard/>

                
            </div>
            

            </div>
            <div className="absolute lg:-bottom-6 lg:right-72 md:-botton-1 md:right-7  -z-10  md:w-56 md:h-80 
            w-32 h-56 -bottom-3 right-0 bg-cover bg-center bg-gray-400 rounded-tl-full rounded-tr-full" style={{backgroundImage: `url(${paris})`}}>


            </div>
        </div>
        

        {/* package section */}
        <div>
            <div className="flex flex-col justify-center items-center font-bold text-red-500">
            <p>Packages</p>
            <h1 className="text-[2.5rem] text-[#181E4B] mb-12 font-bold">Travel Packages</h1>
            </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-5 p-5 gap-x-4  lg:gap-x-9 lg:gap-y-8 lg:ms-7 ">

            <PackageCard/>
            
        </div>
        </div>

        {/* Footer */}
        <div className="md:mt-16">
          <Footer/>
        </div>

        </div>
    );
}

export default UserHome;
