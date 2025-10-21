import { BotMessageSquare } from 'lucide-react';
import { Link } from "react-router-dom";


import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='nav flex items-center justify-between  h-[90px] bg-gradient-to-r from-[#062229] via-[#283c41] to-[#465153]' style={{ padding: "0px 150px" }}>

        <div className="logo flex items-center gap-[3px] "><span className="text-2xl font-bold text-white ml-2">&lt;</span>
          <BotMessageSquare size={30} color='#fff' /><span className="text-2xl font-bold text-white !ml-0 !mr-3">&gt;</span>
          <Link
            to="/"
            className="text-2xl font-bold text-white ml-2 hover:[text-shadow:0_2px_4px_#959199] transition-all"
          >CodeMate</Link>
        </div>
        <div className="icons flex items-center gap-[20px] ">
          <i className='cursor-pointer transition-all hover:text-[#9333ea]'>

          </i>
        </div>
      </div>
    </>
  )
}

export default Navbar