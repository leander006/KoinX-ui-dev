
import React from 'react'
import Growth from './Growth'
import { getNum } from '@/utlis/getInfo';

function InfoCard({data}) {
  // console.log(data.item);
  return (
    <div className='border mx-8 lg:mx-2 border-gray-300 rounded-[8px] p-2 xl:p-4  mb-12 lg:mb-0 h-fit'>
      <div className='flex items-center space-x-1.5 lg:space-x-1.5 whitespace-nowrap'>
            <img className='w-6 h-6' src={data?.item?.thumb} alt='trendImage'/>
            <h1>{data?.item?.symbol}</h1>
            <Growth data={data?.item?.data?.price_change_percentage_24h?.usd} />

      </div>
      <div>
            <h1 className='ml-1 text-lg mt-3 lg:mt-0'>{getNum(data?.item?.data?.price)}</h1>
      </div>     
      <div className='flex justify-center'>
          <img className='h-12' src={data?.item?.data?.sparkline} alt='trendImage'/>
      </div>
    </div>

  )
}

export default InfoCard