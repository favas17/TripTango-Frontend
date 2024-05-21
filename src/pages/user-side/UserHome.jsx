import bgImage from "../../assets/LandingPage.png";
import Header from "../../components/Header";

function UserHome() {
    return (
        <div className="relative w-screen h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
            <Header />
            <div className="flex flex-col px-4 md:px-14  py-10 md:py-28">
                <h1 className="text-[2rem] font-bold w-full md:w-3/5  pb-5 text-white">
                    No matter where you're going to, we will take you there
                </h1>
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
    );
}

export default UserHome;
