"use client"
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
export default function Navbar(){
  const [nav, setNav] = useState(false);
  const navItems = ["Jobs", "Messages", "Payments", "Contact Us"];

    return(
    <div className="w-full flex items-center justify-center py-[24px] px-[24px] lg:px-[40px]">
    <nav className="w-full flex items-center justify-between">
        <div className="flex items-center justify-center py-[9px] px-[28px] text-[#DC4A2D]">
          <span className="font-bold text-[20px] leading-[27px]">Logo</span>
        </div>
        <div className='p-1 flex gap-2 lg:gap-3 rounded-full border border-[0.5px] border-[#D1D1D1] hidden md:flex font-medium text-[20px] leading-[27px]'>
          <div className='bg-[#DC4A2D] p-2 lg:p-3 rounded-full flex md:gap-4 text-[#FFFFFF] border border-[2px] border-[#FCB4A5]'>
            <div className='flex items-center justify-center gap-2'><Image  src="/Icon.png" alt="Jobs" width={24} height={24}/><span className="mt-[2px]">Jobs</span></div>
          </div>
          <div className='p-2 lg:p-3 font-satoshi rounded-full flex md:gap-4 text-[#B0B0B0]'>
            <div className='flex items-center justify-center gap-2'> <div className="relative"><div className="circle absolute bg-[#DC4A2D] right-0"></div><Image src="/message.svg" alt="Messages"  width={24} height={24} /></div>
            <span>Messages</span></div>
          </div>
          <div className='p-2 lg:p-3 font-satoshi rounded-full flex md:gap-4 text-[#B0B0B0]'>
            <div className='flex items-center justify-center gap-2'><Image src="/coins-hand.svg" alt="Payments"  width={24} height={24} />Payments</div>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='flex items-center justify-center gap-3'>
          <div className="relative"><div className="circle absolute bg-[#DC4A2D] left-[20px]"></div><Image src="/bellLogo.svg" alt="Bell" width={32} height={32}/></div>
          <div className="flex items-center justify-center gap-1">
          <Image src="/Logo.png" alt="Logo" width={40} height={40}/> 
          <IoIosArrowDown />
          </div>
          </div>
        </div>
        <div onClick={() => setNav(!nav)} className="block md:hidden">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
              className={
                nav
                  ? "fixed md:hidden left-0 top-0 w-[60%] h-screen border-r text-white border-r-gray-900 bg-[#DC4A2D]  ease-in-out duration-500 z-50"
                  : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
              }
            >
              <li className="p-4">
               <Image src="/CompanyLogo.png" width={40} height={40} />
               </li>
              {/* Mobile Navigation Items */}
              {navItems.map((item) => (
                <li
                  key={item}
                  className="p-4 border-b rounded-xl hover:bg-[#cccccc] hover:text-black duration-300 cursor-pointer border-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
    </nav>
    </div>
  )
}
