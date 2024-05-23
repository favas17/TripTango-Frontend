import logo from '../assets/logoBlack.png'
import X from "../assets/X.png"
import linkdeln from "../assets/linkedin.png"
import insta from "../assets/messenger.png"
import whatsapp from "../assets/twoo.png"

function Footer(){

    return(
        <footer>
            <div className="flex justify-evenly">

                <div className=''>
                    <img className='w-20' src={logo} alt="" />
                    <p className='max-w-52'>Trip Tango helps companies manage payments easily</p>
                    <ul className="flex max-w-28 justify-between">
                        <li><img className='' src={X} alt="X" /></li>
                        <li><img className='' src={linkdeln} alt="Linkdeln" /></li>
                        <li><img className='' src={insta} alt="Instagram" /></li>
                        <li><img className='' src={whatsapp} alt="Whatsapp" /></li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold'>Company</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold'>Destinations</h1>
                    <ul>
                        <li>Maldives</li>
                        <li>Los Angels</li>
                        <li>Las Vegas</li>
                        <li>America</li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold'>Join Our Newsletter</h1>
                    <input className='border-2 rounded-sm h-9 outline-none relative' type="email" name="email" id="email" placeholder="Your email address"/>
                    <button className='absolute  bg-[#DF6951] w-24 rounded-md h-7 '>Subscribe</button>
                </div>
            </div>
        </footer>
    )
}



export default Footer;