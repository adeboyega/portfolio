import {React, useState} from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { CiMail } from "react-icons/ci";
  import { MdContacts } from "react-icons/md";
import logo from '../assets/Bayologo.png'

const Nav = () => {
    const [active, setactive] = useState(false)
    const handleclick =()=>{
        setactive(!active)
    }  
    return (
    <div className='flex fixed justify-between w-full bg-[#0a192f] md:bg-[#0B3F30] px-4'>
        {/* <img src={logo} alt="Bayologo" style={{width: '150px'}}/> */}
        <h1 className='h-10 bg-[#8892b0] w-10 flex items-center justify-center p-9 text-[#0B3F30] rounded-full mt-4 font-bold '>TBA</h1>
        <div className='flex justify-center items-center'>
        <ul className='hidden md:flex justify-center gap-2 items-center'>
            <li className='hover:text-[#8892b0] duration-300'>Home</li>
            <li className='hover:text-[#8892b0] duration-300'>About</li>
            <li className='hover:text-[#8892b0] duration-300'>Skills</li>
            <li className='hover:text-[#8892b0] duration-300'>Work</li>
            <li className='hover:text-[#8892b0] duration-300'>Contact</li>
        </ul>
        {/* hambuger */}
        <div onClick={handleclick} className='flex md:hidden px-2 z-10'>
        {active ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>
        {/* mobile menu */}
        <ul className={active? 'absolute top-0 left-0 h-screen w-full bg-[#0a192f] md:bg-[#0B3F30] flex flex-col justify-center items-center text-[#8892b0]' : 'hidden'}>
            <li className='py-6 text-4xl hover:text-pink-600'>Home</li>
            <li className='py-6 text-4xl hover:text-pink-600'>About</li>
            <li className='py-6 text-4xl hover:text-pink-600'>Skills</li>
            <li className='py-6 text-4xl hover:text-pink-600'>Work</li>
            <li className='py-6 text-4xl hover:text-pink-600'>Contact</li>
        </ul>
        </div>
        <ul className='hidden fixed flex-col top-[35%] left-0 text-gray-50 sm:flex'>
        <li className='flex justify-center items-center gap-2 h-[60px] w-[160px] ml-[-100px] hover:ml-[-10px] duration-300  bg-blue-600'> <a className='flex justify-between items-center w-full text-gray-300' href="/">Linkedin <FaLinkedin size={30}/></a></li>
            <li className='flex justify-center items-center  h-[60px] w-[160px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'> <a className='flex justify-between items-center w-full text-gray-300' href="/">Github <FaGithub size={30} /></a></li>
            <li className='flex justify-center items-center gap-2 h-[60px] w-[160px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'> <a className='flex justify-between items-center w-full text-gray-300' href="/">Mail  <CiMail size={30}/></a></li>
            <li className='flex justify-center items-center h-[60px] w-[160px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'> <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume <MdContacts size={30} /></a></li>
            
        </ul>
        
    </div>
  )
}

export default Nav