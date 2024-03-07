
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import PriceChange from "../SideCompents/PriceChange"

function InfoBar() {
       const main = useSelector((state: RootState) => state.mainPagedata.data)
  return (

    <div className="rounded-b-none rounded-[8px] p-6">
          <div className="flex items-center mb-2">
                <h1 className="text-3xl mr-6">$ {main?.market_data?.current_price?.usd.toLocaleString('en-US')}</h1>
                <PriceChange data={main?.market_data?.price_change_percentage_24h}/>
                <h1 className="text-gray-400 ml-3">(24h)</h1>
          </div>
    <div className="border border-x-0 border-t-0  pb-[35px]">
          <h1> ₹ {main?.market_data?.current_price?.inr.toLocaleString('en-US')}</h1>
    </div>


    </div>
  )
}

export default InfoBar