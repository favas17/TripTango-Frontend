import logo from '../assets/logoBlack.png'
import X from "../assets/X.png"
import linkdeln from "../assets/linkedin.png"
import insta from "../assets/messenger.png"
import whatsapp from "../assets/twoo.png"

function Footer(){

    return(
        <footer className='bg-[#EEEEFF] p-8'>
            <div className="flex flex-col md:flex-row justify-evenly items-start space-x-2  ">

                <div className='space-y-4'>
                    <img className='w-20' src={logo} alt="" />
                    <p className='max-w-52'>Trip Tango helps companies manage payments easily</p>
                    <ul className="flex max-w-24 justify-between">
                        <li><img className='w-4 object-cover' src={X} alt="X" /></li>
                        <li><img className='w-4 object-cover' src={linkdeln} alt="Linkdeln" /></li>
                        <li><img className='w-4 object-cover' src={insta} alt="Instagram" /></li>
                        <li><img className='w-4 object-cover' src={whatsapp} alt="Whatsapp" /></li>
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h1 className='font-bold'>Company</h1>
                    <ul className='space-y-2'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className='space-y-1'>
                    <h1 className='font-bold'>Destinations</h1>
                    <ul className='space-y-1'>
                        <li>Maldives</li>
                        <li>Los Angels</li>
                        <li>Las Vegas</li>
                        <li>America</li>
                    </ul>
                </div>

                <div className='relative space-y-5'>
                    <h1 className='font-bold'>Join Our Newsletter</h1>
                    <input className='border-none font-light placeholder:ps-2 rounded-md h-9 bg-[#EEFEEEF] w-56 outline-none ' type="email" name="email" id="email" placeholder="Your email address"/>
                    <button className='absolute top-6 -right-8 text-white   bg-[#DF6951] w-24 rounded-md h-9 '>Subscribe</button>
                </div>
            </div>
            <div className='w-full'>
            <hr className=' w-4/6  border-[#ccc5c5]  m-auto mt-14'/>
            <p className='flex justify-center mt-2 font-light'>Copyright @ ABC 2024. All Rights Reserved.</p>
            </div>
        </footer>
    )
}



export default Footer;