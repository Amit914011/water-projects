import React, { useState } from "react";
import logo from "../assets/DP (2).png";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import language1 from '../assets/uk_4eaf8ff31c.png'
import language2 from '../assets/ae_e6a03874e0.png'


export default function Navbar() {
    const [show , setShow] = useState('')
    const [menuOpen,setMenuOpen]=useState(false)
    const [menuOpen1,setMenuOpen1]=useState(false)
    const [menuOpen2,setMenuOpen2]=useState(false)
    const [menuOpen3,setMenuOpen3]=useState(false)
  return (
    <>
      <nav className="">
        
       <div className="hidden lg:block">
             {/* Top menu Bar */}
        <div className="topnavbar">
          <div className="logo">
           <a href="/"> <img src={logo} alt="" /></a>
          </div>
          <div className="topmenuBar">
            <div>
              <ul className="topmenu borderrite">
                <li className="text-[#0078F5]">
                  <a href="">Buy Now</a>
                </li>
                <li>
                  <a href="/login">Log In</a>
                </li>
                <li>
                  <a href="">Create Account</a>
                </li>
              </ul>
            </div>
            <div className="topmenu">
              <div className="cart">
                <FaShoppingCart className="text-2xl text-white " />
                <span className="number">0</span>
              </div>
              <div>
                <p className="text-black">My Cart</p>
                <p className="text-[#0078F5]">AED 0.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttom Menu Bar */}
        <div className="buttommenubar">
          <div>
            <ul className="mainMenu">
              <li>
                <a href="/">Play <IoMdArrowDropdown  className="inline icon"/></a>
                <ul className="sumenu">
                    <li title="How to Withddraw"><a href="/how-to-withdraw" className="block">How To Withdraw</a></li>
                    <li title="FAQs"><a href="/faq" className="block">FAQs</a></li>
                </ul>
              </li>
              <li>
                <a href="/draw" className="block">Draws <IoMdArrowDropdown  className="inline icon"/></a>
                <ul className="sumenu">
                    <li title="Previous Live Draws"><a href="previous-live-draw" className="block">Previous Live Draws</a></li>
                    <li title="Winners"><a href="" className="mr-16">Winners </a><IoMdArrowDropright className="inline text-right"/>
                        <ul className="deepmenu">
                            <li title="Mahzooz Millionaires Club"><a href="/mahzooz-millionaires" className="block">Mahzooz Millionaires Club</a></li>
                            <li title="Mahazooz Tripple 100 Club"><a href="/tripple" className="block">Mahazooz Tripple 100 Club</a></li>
                            <li title="Mahazooz Hall of Frame"><a href="/hall-of-fame" className="block">Mahazooz Hall of Frame</a></li>
                        </ul>
                    </li>
                </ul>
              </li>
              <li>
                <a href="/community">Community <IoMdArrowDropdown  className="inline icon"/></a>
                <ul className="sumenu">
                    <li title="Supports Initiatives"><a href="/support" className="block">Supports Initiatives</a></li>
                    <li title="Fraud Awareness"><a href="/fraud-awareness" className="block">Fraud Awareness</a></li>
                </ul>
              </li>
              <li>
                <a href="/blog">Latest News</a>
              </li>
              <li>
                <a href="/about-us" className="block">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            {/* <ul className="language">
                <li className="bg-gray-200 text-black font-bold arrowIcons">AED <IoMdArrowDropdown  className="inline icon text-black"/>
                
                    <ul className="sublanguage ">
                        <li><a href="" className="block">AED</a></li>
                        <li><a href="">ARS</a></li>
                        <li><a href="">AUD</a></li>
                        <li><a href="">BRL</a></li>
                        <li><a href="">CAD</a></li>
                        <li><a href="">XAF</a></li>
                        <li><a href="">KES</a></li>
                        <li><a href="">CLP</a></li>
                        <li><a href="">EUR</a></li>
                       
                    </ul>
                </li>
                <li className="bg-[#1BABE3] text-white font-bold arrowIcons flex items-center justify-center "><img src={language1} className="w-[40px] h-[20px]" alt="" /> English <IoMdArrowDropdown  className="inline icon"/>
                <ul className="sublanguage h-auto">
                <li className=" text-white font-bold arrowIcons flex items-center justify-center "><img src={language1} className="w-[40px] h-[20px]" alt="" /> English <IoMdArrowDropdown  className="inline icon"/></li>
                <li className=" text-white font-bold arrowIcons flex items-center justify-center "><img src={language1} className="w-[40px] h-[20px]" alt="" /> English <IoMdArrowDropdown  className="inline icon"/></li>
                        
                       
                        
                    </ul>
                </li>
            </ul> */}
          </div>
        </div>
       </div>

       {/* mobile menu */}

       <div className="block lg:hidden px-[20px] md:px-[50px] relative w-full overflow-hidden">
       <div className="flex justify-between items-center ">
        <a href="/"><img src={logo} alt="" className=" w-[100px]" /></a>
        <div className="flex items-center">
        <button className="bg-[#FFE764] text-[#0078f5] mr-2 p-1 font-bold rounded mt-3 md:text-xl md:px-5 ">Buy Now</button>
        <GiHamburgerMenu className="text-3xl mt-3 cursor-pointer" onClick={()=>{setShow('show')}}/>
        </div>
       </div>
       <div className={`w-full overflow-hidden`}>
            
       </div>
       </div>
       <div className={`w-[50vw] sm:w-[40vw] h-[100vh] overflow-auto border mobileMenu ${show}`}>
       <MdClose className="absolute top-[20px] text-2xl cursor-pointer" onClick={()=>{setShow('')}}/>
                <ul className="mainMobileMenu z-50">
                    <li className="hover:bg-blue-50 "><a href="#" className="block pl-2">Buy Now</a></li>
                    <li className=" "><a href="/" className="mr-20 pl-2">Play</a>
                    <IoMdArrowDropdown  className="inline cursor-pointer"  onClick={()=>setMenuOpen(!menuOpen)}/>
                   
                    <ul className={`${menuOpen?"block":"hidden"}`}>
                      <li className="hover:bg-gray-50"><a href="/how-to-withdraw" className="pl-2">How To Withdraw</a></li>
                      <li className="hover:bg-gray-50"><a href="/faq" className="pl-2">FAQs</a></li>
                    </ul>
                    </li>
                    <li className=" "><a href="/draw" className="mr-14 pl-2">Draws</a>
                    <IoMdArrowDropdown  className="inline cursor-pointer"  onClick={()=>setMenuOpen1(!menuOpen1)}/>
                    <ul className={`${menuOpen1?"block":"hidden"}`}>
                      <li className="hover:bg-gray-50"><a href="/previous-live-draw" className="pl-2">Previous Live Draws</a></li>
                      <li className="hover:bg-gray-50"><a href="/faq" className="pl-2 mr-16">Winners</a>
                      <IoMdArrowDropdown  className="inline cursor-pointer"  onClick={()=>setMenuOpen3(!menuOpen3)}/>
                      <ul className={`${menuOpen3?"block":"hidden"}`}>
                      <li title="Mahzooz Millionaires Club"><a href="/mahzooz-millionaires" className="block ml-4">Mahzooz Millionaires Club</a></li>
                            <li title="Mahazooz Tripple 100 Club"><a href="/tripple" className="block pl-4">Mahazooz Tripple 100 Club</a></li>
                            <li title="Mahazooz Hall of Frame"><a href="/hall-of-fame" className="block pl-4">Mahazooz Hall of Frame</a></li>
                    </ul>

                      </li>
                    </ul>
                    </li>
                    <li className=" "><a href="/community" className="mr-14 pl-2">Community</a>
                    <IoMdArrowDropdown  className="inline cursor-pointer"  onClick={()=>setMenuOpen2(!menuOpen2)}/>
                    <ul className={`${menuOpen2?"block":"hidden"}`}>
                    <li title="Supports Initiatives"><a href="/support" className="block pl-2">Supports Initiatives</a></li>
                    <li title="Fraud Awareness"><a href="/fraud-awareness" className="block pl-2">Fraud Awareness</a></li>
                     
                    </ul>
                    </li>
                    <li className=" "><a href="/blog" className="block pl-2">Latest News</a></li>
                    <li className=" "><a href="/about-us" className="block pl-2">About Us </a></li>
                    <li className=" "><a href="/login" className="block pl-2">Log In</a></li>
                    <li className=" "><a href="/create-account" className="block pl-2"></a>Create Account</li>
                </ul>
            </div>
      </nav>
      
    </>
  );
}
