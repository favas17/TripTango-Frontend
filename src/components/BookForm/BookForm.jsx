import Button from "../Button/ClickButton"

function BookForm (){

    return(
        <div className="flex flex-col w-full justify-evenly items-center md:py-6 p-2 space-y-2 md:space-y-4">
        <input className="filtering " type="text" name="name" id="namae" placeholder="Name"/>
        <input className="filtering " type="email" name="email" id="email" placeholder="Email" />
        <input className="filtering " type="email" name="confirm_email" id="email" placeholder="Confirm email"/>
        <input className="filtering " type="number" name="number" id="number" placeholder="Number"/>
        <input className="filtering " type="date" name="date" id="date" placeholder="Date"/>
        <input className="filtering " type="number" name="numTicket" id="numTicket" placeholder="Number of ticket"/>
        <input className="filtering " type="text" name="msg" id="msg" placeholder="Message"/>

        <Button className="px-2 h-7 border-none rounded-md text-white bg-customRed" label="Check Availability"/>
        <Button className="w-24 h-7 border-none rounded-md text-white bg-customRed" label="Book Now"/>
    </div>
    )
}

export default BookForm;