

import Image from 'next/image'

interface data{
      src:string,
      title:string,
      num:number
}

function TrendingCards(data:any) {


console.log(data?.data);
const info = data?.data
  

  return (
    <div className='space-y-4'>
            <div className='flex items-center'>
                  <img className='rounded-full w-[24px] h-[24px]' src={info?.thumb} alt=""  />
                  <h1 className='ml-2'>{info?.name} ({info?.symbol})</h1>
            </div>


            <div>
                  
            </div>
      
    </div>
  )
}

export default TrendingCards