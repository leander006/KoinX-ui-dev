
import Image from "next/image"
import fundamental from "@/public/fundamentals.png"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
function Fundamentals() {

        const main = useSelector((state: RootState) => state.mainPagedata.data)


  return (
    <div className="h-full my-6">
      <div className="flex items-center mb-6">
            <h1 className="text-[#0F1629] mr-3 text-md md:text-xl">Fundamentals</h1>
            <Image className="w-4 h-4 rounded-full" src={fundamental} alt="fundamental" />
      </div>

      <div className="flex lg:flex-row flex-col justify-between lg:space-x-20"> 
            <div className="lg:w-[50%]  text-xs md:text-lg">
                  <div className="flex items-center justify-between py-4 mb-4 border-b-[2.2px] border-x-0 border-t-0">
                          <h1 className="text-[#768396]">{main?.name} Price</h1>
                          <h1>$16,815.46</h1>
                  </div>
                  <div className="flex items-center justify-between py-4 mb-4 border-b-[2.2px] border-x-0 border-t-0">
                          <h1 className="text-[#768396]">24h Low / 24h High</h1>
                          <h1>${main?.market_data?.low_24h?.usd.toLocaleString('en-US')} / ${main?.market_data?.high_24h?.usd.toLocaleString('en-US')}</h1>
                  </div>
                  <div className="flex items-center justify-between py-4 mb-4 border-b-[2.2px] border-x-0 border-t-0">
                          <h1 className="text-[#768396]">7d Low / 7d High</h1>
                          <h1>${main?.market_data?.low_24h?.usd.toLocaleString('en-US')} / ${main?.market_data?.high_24h?.usd.toLocaleString('en-US')}</h1>
                  </div>
                  <div className="flex items-center justify-between py-4 mb-4 border-b-[2.2px] border-x-0 border-t-0">
                          <h1 className="text-[#768396]">Trading Volume</h1>
                          <h1>$23,249,202,782</h1>
                  </div>
                  <div className="flex items-center justify-between py-4 mb-4 border-b-[2.2px] border-x-0 border-t-0">
                          <h1 className="text-[#768396]">Market Cap Rank</h1>
                          <h1>#{main?.market_cap_rank}</h1>
                  </div>
                  
            </div>
            <div className="lg:w-[50%] text-xs md:text-lg">
                  <div className="flex items-center justify-between py-4 mb-4 border-b-[2.2px] border-x-0 border-t-0">
                          <h1 className="text-[#768396]">Market Cap</h1>
                          <h1>$323,507,290,047</h1>
                  </div>
                  <div className="flex items-center justify-between py-4 mb-4 border-b-[2.2px] border-x-0 border-t-0">
                          <h1 className="text-[#768396]">Market Cap Dominance</h1>
                          <h1>38.343%</h1>
                  </div>
                  <div className="flex items-center justify-between py-4 mb-4 border-b-[2.2px] border-x-0 border-t-0">
                          <h1 className="text-[#768396]">Volume / Market Cap</h1>
                          <h1>0.0718</h1>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b-[2.2px] border-x-0 border-t-0">
                          <h1 className="text-[#768396]">All-Time High</h1>
                          <div>
                            <div className="flex justify-end">
                                  <h1 className="mr-2">$69,044.77 </h1>
                                  <h3 className="text-red-400"> -75.6% </h3>
                            </div>
                              
                              <h2>Nov 10, 2021 (about 1 year)</h2>
                          </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b-[2.2px] border-x-0 border-t-0">
                          <h1 className="text-[#768396]">All-Time Low</h1>
                          <div>
                              
                              <div className="flex justify-end">
                                  <h1 className="mr-2">$67.81</h1>
                                  <h3 className="text-green-400">24729.1%</h3>
                              </div>
                              <h2>Jul 06, 2013 (over 9 years)</h2>
                          </div>
                          
                  </div>
                  
            </div>
      </div>

    </div>
  )
}

export default Fundamentals