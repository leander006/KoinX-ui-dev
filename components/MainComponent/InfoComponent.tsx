import Image from "next/image"
import TradingViewWidget from "@/components/MainComponent/TradingViewWidget"
import image from "@/public/image.png"
import arrow from "@/public/inc.png"
function InfoComponent() {
  return (


    <div className=" bg-white rounded-b-none rounded-[8px] p-6">

            <div className="flex space-x-8 mb-[34px]">
                  <div className="flex space-x-2 items-center">
                        <Image className="w-8 h-8 rounded-full" src={image} alt="logo" />
                        <h1 className="text-lg">Bitcoin</h1>
                        <h3 className="text-xs">BTC</h3>
                  </div>
                  <div className="bg-gray-500 p-3 text-white w-fit rounded-[8px]">
                        Rank #1
                  </div>
            </div>

            <div>
                  <div className="flex items-center mb-2">
                        <h1 className="text-3xl mr-6">$ 34,0000</h1>
                        <div className="bg-green-200 text-green-400 w-fit rounded-[8px] flex items-center p-1.5">
                              <Image className="w-4" src={arrow} alt="incLogo" />
                              <h1 className="ml-2">2.51%</h1>
                        </div>
                        <h1 className="text-gray-400 ml-3">(24h)</h1>
                  </div>
            </div>

            <div className="border border-x-0 border-t-0  pb-[35px]">
                  <h1> ₹ 39,00,000</h1>
            </div>

            
    </div>
  )
}

export default InfoComponent