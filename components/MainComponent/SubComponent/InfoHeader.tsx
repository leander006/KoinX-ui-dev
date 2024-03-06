import React from 'react'
import OverView from './OverView'
import Fundamentals from './Fundamentals'
import Sentiment from './Sentiment'

function InfoHeader() {
  return (
    <div className='flex flex-col  text-[#3E424A] my-6 '>

      <div className='flex w-full justify-between overflow-y-scroll lg:overflow-y-hidden space-x-3 whitespace-nowrap border pb-3 border-[#a9aaab] border-t-0 border-x-0'>
          <div className='cursor-pointer'>Overview</div>
              <div className=' cursor-pointer'>Fundamentals</div>
              <div className=' cursor-pointer'>News Insights</div>
              <div className=' cursor-pointer'>Sentiments</div>
              <div className=' cursor-pointer'>Team</div>
              <div className=' cursor-pointer'>Technicals</div>
              <div className=' cursor-pointer'>Tokenomics</div>
          </div>



          <div className='bg-white rounded-[8px] p-6 mt-6'>
            <OverView/>
            <Fundamentals/>
          </div>


          <div className='bg-white rounded-[8px] p-6 mt-6'>
            
            <Sentiment/>
          </div>


    </div>
  )
}

export default InfoHeader
