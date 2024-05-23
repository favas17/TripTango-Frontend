import head from "../../assets/TravelWithUs.png"
import tbg from "../../assets/WithusBg.png"
function CoverPage(){

    return(
        <div>
            <div className="w-full h-80 bg-cover" style={{backgroundImage: `url(${tbg})`}}>
            <img className="bg-black" src={head} alt="" />
            </div>
        </div>
    )
}
export default CoverPage;