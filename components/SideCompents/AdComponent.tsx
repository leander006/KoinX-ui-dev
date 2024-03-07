
import Image from 'next/image'
import frame from '@/public/Frame.png'
import arrow from "@/public/arrow.png"
function AdComponent() {
  return (
    <div className="flex flex-col space-y-6 rounded-[8px] px-12 py-12 bg-[#0052FE] text-center text-white">
            
            <div>
                  <h1 className='text-lg md:text-2xl'>Get Started with KoinX</h1>
                  <h1 className='text:lg md:text-2xl'>for FREE</h1>
            </div>

            <p className='text-xs md:text-sm'>With our range of features that you can equip for free,
            KoinX allows you to be more educated and aware of your tax reports.</p>

            <div className='flex justify-center'>
                  <Image className='w-[178.66px] h-[166.22px] ' src={frame} alt='frame.png'/>
            </div>
            
            <div className='flex justify-center items-center'>
                  <div className='flex items-center justify-center rounded-[8px] bg-white  text-black py-3  px-1 md:px-2 cursor-pointer'>
                        <h1 className='text-xs md:text-lg'>Get Started for FREE</h1>
                        <Image className='w-[9px] h-[9px] md:w-[15px] md:h-[15px] mx-[2.1px] md:ml-3'  src={arrow} alt='frame.png'/>
                  </div>   
            </div>

            
    </div>
  )
}

export default AdComponent