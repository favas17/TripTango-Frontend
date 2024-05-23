import promo from "../assets/promo.png"
function PromotionCard(){

    return(
        <div className="relative rounded-lg w-36 h-36 bg-cover bg-center" style={{backgroundImage: `url(${promo})`}}>
            <div className="flex justify-end p-2">
            <p className=" w-16 rounded-xl flex items-center justify-center bg-red-500 text-white">700₹</p>
            </div>
        </div>
    )
}

export default PromotionCard;