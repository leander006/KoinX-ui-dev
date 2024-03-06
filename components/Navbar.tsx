"use client"

import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'

function Navbar() {
  const links = [
    { id: 1, links: "Crypto Taxes" },
    { id: 2, links: "Free Tools" },
    { id: 3, links: "Resource Center" }
  ];
  const socails = [
    {
      id: 1,
      child: (
        <>
          <i className="fa-brands fa-2xl fa-linkedin"></i>
        </>
      ),
      href: "https://www.linkedin.com/in/leander06/",
    },
    {
      id: 2,
      child: (
        <>
          <i className="fa-solid fa-2xl fa-envelope"></i>
        </>
      ),
      href: "mailto:leanderdsilva06@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          <i className="fa-brands fa-2xl fa-github"></i>
        </>
      ),
      href: "https://github.com/leander006",
    },
    {
      id: 4,
      child: (
        <>
          <i className="fa-brands fa-2xl fa-instagram"></i>
        </>
      ),
      href: "https://www.instagram.com/leander_dsilva06/",
    },
  ];
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center px-12 bg-white w-full shadow-md z-50 fixed h-[79px]">
      <div className="w-[94.97px]">
            <Image src={logo} alt="Picture of the author" priority />
      </div>

      <ul className="hidden md:flex items-center space-x-8">
        {links.map(({ links, id }) => (
          <li
            key={id}
            className="text-black font-medium capitalize cursor-pointer hover:scale-125 duration-300"
          >
            <Link href={links}>
              {links}
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
          <i className="cursor-pointer z-20 fa-2xl mr-4 fa-solid fa-bars"></i>
        )}
      </div>
      {nav && (
        <div className="left-0 top-0 fixed z-50 w-full h-screen bg-black/70 ">
          <ul className="flex flex-col p-2 top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] h-screen text-white">
            <div className=" mt-4 w-full items-center">
              <div className="flex justify-between">
              <div className=" pl-6">
                   <Image className="w-[81px] pl-3" src={logo} alt="Picture of the author" priority />
              </div>

                <div
                  onClick={() => setNav(!nav)}
                  className="flex cursor-pointer text-black/60 justify-center md:hidden"
                >
                  {nav && (
                    <i className="z-20 fa-2xl mr-4 fa-solid fa-xmark"></i>
                  )}
                </div>
              </div>
              <div className="text-black text-xl border-b my-2 border-gray-400">
                <p>Let's build something new</p>
              </div>
            </div>
            <div className="flex flex-col mt-16 items-center">
              {links.map(({ links, id }) => (
                <li
                  key={id}
                  className="text-black py-6 mx-4 font-medium capitalize cursor-pointer hover:scale-125 duration-300"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    href={links}
                  >
                    {links}
                  </Link>
                </li>
              ))}
              <div className="text-black text-center mt-16">
                <h1>Let's connect</h1>
                <div className="flex">
                  {socails.map(({ id, child, href }) => (
                    <li key={id} className="h-12 mx-1">
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex bg-blue-500 h-full px-2 rounded-full items-center text-white"
                      >
                        {child}
                      </a>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;