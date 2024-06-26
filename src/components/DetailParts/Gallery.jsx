
function Gallery({photos}){

    if(!photos){
        return <div>Loading...</div>
    }
    console.log(photos,"bbaa")
    return(
        <div className="rounded-lg shadow-md h-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {photos.map((photo,index)=>(
                    <img key={index}  src={`http://localhost:8989/uploads/${photo}`} alt="" />
                ))}
            </div>

        </div>
    )
}

export default Gallery;