import Image from 'next/image'
import React from 'react'
import Growth from './Growth'

function InfoCard({data}) {
  console.log(data);
  return (
    <div className='border mx-8 lg:mx-0 border-gray-300 rounded-[8px] p-2 xl:p-4 lg:w-fit mb-12 lg:mb-0'>
      <div className='flex items-center space-x-6 lg:space-x-1.5'>
            <Image className='w-6 h-6' src={data.img} alt='trendImage'/>
            <h1>{data.name}</h1>
            <Growth g={data} />

      </div>
      <div>
            <h1 className='ml-1 text-lg mt-3 lg:mt-0'>${data.num1}</h1>
      </div>     
      <div className='flex justify-center'>
            <Image className='w-12 h-12 ' src={data.url} alt='growthUrl'/>
      </div>
    </div>

  )
}

export default InfoCard