
import Image from "next/image"
import arrow from "@/public/inc.png"
import downarrow from "@/public/downarrow.png"

function PriceChange(data:any) {

      console.log(data.g);
      
  return (
    <div>

            <div className={`${data.data > 0 ?"bg-green-100 text-green-800":"bg-red-100 text-red-800"} w-fit rounded-[8px] flex items-center px-2 py-1`}>
                  {data.data > 0 ? <Image className="w-4" src={arrow} alt="incLogo" />:<Image className="w-4" src={downarrow} alt="incLogo" />}
                  <h1 className="ml-2">{data.data?.toFixed(2)}%</h1>
            </div>
    </div>
  )
}

export default PriceChange