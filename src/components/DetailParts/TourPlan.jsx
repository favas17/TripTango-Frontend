
function TourPlan({plan}){
if(!plan){
    return <div>Loading...</div>
}
    return(
        <div className="rounded-lg shadow-md h-full p-4">
            <h1 className="font-bold">Tour Plan</h1>

            {/* days */}
            <div>
                {/* day */}
            <div>
                <h1 className="flex items-center">Day 1: Departure</h1>
                <p>details</p>
                {/* key things */}
                <ul>
                    <li>abc</li>
                    <li>def</li>
                </ul>
            </div>

            <div>
                <h1 className="flex items-center">Day 1: Departure</h1>
                <p>details</p>
                {/* key things */}
                <ul>
                    <li>abc</li>
                    <li>def</li>
                </ul>
            </div>

            <div>
                <h1 className="flex items-center">Day 1: Departure</h1>
                <p>details</p>
                {/* key things */}
                <ul>
                    <li>abc</li>
                    <li>def</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default TourPlan;