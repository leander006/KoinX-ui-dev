
import Image from "next/image"
import arrow from "@/public/inc.png"
import downarrow from "@/public/downarrow.png"

function PriceChange(data:any) {

      console.log(data.g);
      
  return (
    <div>

            <div className={`${data.data > 0 ?"bg-green-100 text-green-800":"bg-red-100 text-red-800"} rounded-[8px] whitespace-nowrap flex items-center px-0.5 md:px-1 py-1`}>
                  {data.data > 0 ? <Image className="w-2 md:w-4" src={arrow} alt="incLogo" />:<Image className="w-2 md:w-4" src={downarrow} alt="incLogo" />}
                  <h1 className="ml-0.5 md:ml-1">{Math.abs(data.data?.toFixed(2))}%</h1>
            </div>
    </div>
  )
}

export default PriceChange