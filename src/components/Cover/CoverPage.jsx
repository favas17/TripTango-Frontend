import tbg from "../../assets/WithusBg.png"
import Header from "../Header"
function CoverPage({label}){

    return(
        <div className=" w-full h-[25rem] md:h-[30rem]">
            <div className=" w-full h-full bg-center bg-cover" style={{backgroundImage: `url(${tbg})`}}>
                <Header/>

               <div className=" flex flex-col justify-center pb-32 items-center w-full  h-full">
                  <img className="w-[25rem] md:w-[35rem]  object-cover " src={label} alt="" />
                </div>
        </div>
            </div>
    )
}
export default CoverPage;