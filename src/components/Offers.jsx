function Offer({image,head,details}){
    return(
        <div className="w-[10rem] h-full flex flex-col">
            <div className="flex justify-center mb-4">
                <img className="w-14 h-14 object-cover" src={image} alt="" />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="font-bold">{head}</h1>
                <p className="text-center ">{details}</p>
            </div>
        </div>
    )
}

export default Offer