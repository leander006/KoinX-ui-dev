

import Image from 'next/image'
import PriceChange from './PriceChange';

function TrendingCards(data:any) {


// console.log(data?.data?.item?.data?.price_change_percentage_24h.usd);
const info = data?.data.item
  

  return (
    <div className=' flex items-center w-full justify-between'>
            <div className='flex items-center'>
                  <img className='rounded-full w-[24px] h-[24px]' src={info?.thumb} alt=""  />
                  <h1 className='ml-2'>{info?.name} ({info?.symbol})</h1>
            </div>
            <div>
                <PriceChange data={info?.data?.price_change_percentage_24h.usd}/>
            </div>
      
    </div>
  )
}

export default TrendingCards