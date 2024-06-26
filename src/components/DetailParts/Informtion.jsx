function Information({ infos }) {
    if (!infos) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="p-4 rounded-lg shadow-md h-full">
        {/* Header */}
        <div className="flex items-center gap-x-8 mb-2">
          <h1 className="text-2xl font-bold text-customPurple">Switzerland</h1>
          <p className="text-xl font-semibold text-customRed">1,000 $ / Per Couple</p>
        </div>
  
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            ★★★★★
          </div>
          <p className="ml-2 text-sm text-gray-600">(2.3k reviews)</p>
        </div>
  
        {/* Description */}
        <p className="mb-6 text-sm text-gray-700">
            {infos.details}
        </p>
  
        {/* Details */}
        <div className="space-y-3 ">
            
        <div className="flex gap-x-12">
           <h3 className="w-32 font-semibold infoFieldsH1">Destination</h3>
           <p className="">: {infos.location}</p>
        </div>

        <div className="flex gap-x-12">
           <h3 className="w-32 font-semibold infoFieldsH1">Destination</h3>
           <p className="">:dbhvhf</p>
        </div>

        <div className="flex gap-x-12">
           <h3 className="w-32 font-semibold infoFieldsH1">Destination</h3>
           <p className="">: gs</p>
        </div>

      </div>

      </div>
    );
  }
  

  
  export default Information;