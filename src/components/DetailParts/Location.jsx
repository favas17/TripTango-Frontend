import GoogleMap from "./Map";

function Location({place}){

    if(!place){
        return <div>Loading...</div>
    }
    return(
        <div className="rounded-lg shadow-md h-full p-4">
            <h1>Tour Plan</h1>
            {/* map area */}
            <GoogleMap address={place.mapLocation}/>
            <p>{place.details}</p>
        </div>
    )
}


export default Location;