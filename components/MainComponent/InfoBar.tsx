import Image from "next/image"
import arrow from "@/public/inc.png"
function InfoBar() {
  return (

    <div className="rounded-b-none rounded-[8px] p-6">
          <div className="flex items-center mb-2">
                <h1 className="text-3xl mr-6">$ 34,0000</h1>
                <div className="bg-green-200 text-green-400 w-fit rounded-[8px] flex items-center p-1.5">
                      <Image className="w-4" src={arrow} alt="incLogo" />
                      <h1 className="ml-2">2.51%</h1>
                </div>
                <h1 className="text-gray-400 ml-3">(24h)</h1>
          </div>
    <div className="border border-x-0 border-t-0  pb-[35px]">
          <h1> ₹ 39,00,000</h1>
    </div>


    </div>
  )
}

export default InfoBar