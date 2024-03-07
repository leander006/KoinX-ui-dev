"use client"

import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'
import navbar from "@/public/Shape.png"
import cancel from "@/public/cancel.png"
function Navbar() {
  const links = [
    { id: 1, links: "bitcoin",name:"Crypto Taxes" },
    { id: 2, links: "ethereum" ,name:"Free Tools"},
    { id: 3, links: "opulous" ,name:"Resource Center"}
  ];

  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center px-12 bg-white w-full shadow-md z-50 fixed h-[79px]">
      <div className="w-[94.97px]">
        <Link href="/bitcoin"><Image src={logo} alt="Picture of the author" priority /></Link>
      </div>

      <ul className="hidden md:flex items-center space-x-8">
        {links.map(({ links, id ,name}) => (
          <li
            key={id}
            className="text-black font-medium capitalize cursor-pointer hover:scale-125 duration-300"
          >
            <Link href={links}>
              {name}
            </Link>
          </li>
        ))}

        <button className="text-white rounded-[8px] px-3 py-2 bg-gradient-to-t from-[#2870EA] to-[#1B4AEF]" type="button">Get Started</button>   
      </ul>
 

      <div
        onClick={() => setNav(!nav)}
        className="flex text-black/60 md:hidden"
      >
        {!nav && (
          <i className="cursor-pointer z-20 ">
               <Image className="w-6 h-6" src={navbar} alt="navbar"/>
          </i>
        )}
      </div>
      {nav && (
        <div className="left-0 top-0 fixed z-50 w-full h-screen bg-black/70 ">
          <ul className="flex flex-col p-2 top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] h-screen text-white">
            <div className=" mt-4 w-full items-center">
              <div className="flex justify-between items-center">
              <div className=" pl-6">
                    <Link href="/bitcoin"><Image className="w-[94.97px]" src={logo} alt="Picture of the author" priority /></Link>
              </div>

                <div
                  onClick={() => setNav(!nav)}
                  className="flex cursor-pointer text-black/60 justify-center md:hidden"
                >
                  {nav && (
                    <i className="z-20 fa-2xl mr-4 fa-solid fa-xmark">
                      <Image className="w-4 h-4" src={cancel} alt="cancel"/>
                    </i>
                  )}
                </div>
              </div>
              <div className="text-black text-xl border-b my-2 border-gray-400">
              </div>
            </div>
            <div className="flex flex-col mt-16 items-center">
              {links.map(({ links, id,name }) => (
                <li
                  key={id}
                  className="text-black py-6 mx-4 font-medium capitalize cursor-pointer hover:scale-125 duration-300"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    href={links}
                  >
                      {name}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;