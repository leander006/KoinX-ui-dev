"use client"

import React, { useState } from 'react'
import OverView from './OverView'
import Fundamentals from './Fundamentals'
import Sentiment from './Sentiment'
import About from './About'
import Tokenomics from './Tokenomics'
import Team from './Team'
import { Link } from 'react-scroll';


function InfoHeader() {

  const [vis, setVis] = useState()



  return (
    <div className='flex flex-col text-[#3E424A] my-6 '>
      <div className='flex w-full justify-between overflow-y-scroll lg:overflow-y-hidden space-x-3 whitespace-nowrap border  border-[#a9aaab] border-t-0 border-x-0'>
        <Link to='overview' smooth={true} duration={500} className='cursor-pointer border border-b-2 border-x-0 border-t-0 text-blue-600 border-blue-600 pb-3'>
          Overview
        </Link>
        <Link to='overview' smooth={true} duration={500} className='cursor-pointer'>
          Fundamentals
        </Link>
        <Link to='sentiment' smooth={true} duration={500} className='cursor-pointer'>
          News Insights
        </Link>
        <Link to='sentiment' smooth={true} duration={500} className='cursor-pointer'>
          Sentiments
        </Link>
        <Link to='team' smooth={true} duration={500} className='cursor-pointer'>
          Team
        </Link>
        <Link to='tokenomics' smooth={true} duration={500} className='cursor-pointer'>
          Technicals
        </Link>
        <Link to='tokenomics' smooth={true} duration={500} className='cursor-pointer'>
          Tokenomics
        </Link>
      </div>



          <div id='overview' className='bg-white rounded-[8px] p-6 mt-6'>
            <OverView/>
            <Fundamentals/>
          </div>


          <div id='sentiment' className='bg-white rounded-[8px] p-6 mt-6'>
            <Sentiment/>
          </div>

          <div id='about' className='bg-white rounded-[8px] p-6 mt-6'>
            <About/>
          </div>

          <div id='tokenomics'  className='hidden lg:flex flex-col bg-white rounded-[8px] p-6 mt-6'>
            <Tokenomics/>
          </div>

          <div id='team' className='bg-white rounded-[8px] p-6 mt-6'>
            <Team/>
          </div>
    </div>
  )
}

export default InfoHeader
