import { RootState } from "@/redux/store";
import { Progress } from "@material-tailwind/react";
import { useSelector } from "react-redux";

function OverView() {

      const main = useSelector((state: RootState) => state.mainPagedata.data)

  return (
    <div className="h-full">
            <h1 className="mb-6 text-[#0F1629] text-lg md:text-3xl">Performance</h1>
            <div className="flex mb-8 items-center md:whitespace-nowrap">
                  <div className="text-sm md:text-lg">
                        <h1 className="mb-2">Today's Low</h1>
                        <h1>{main?.market_data?.low_24h?.usd.toLocaleString('en-US')}</h1>
                  </div>
                  <Progress className="bg-gradient-to-r from-red-500 via-orange-500  to-green-500 md:mx-5" placeholder={"progess"} />
                  <div className="text-sm md:text-lg">
                        <h1 className="mb-2">Today's Low</h1>
                        <h1>{main?.market_data?.high_24h?.usd.toLocaleString('en-US')}</h1>
                  </div>
            </div>
            
            <div className="flex mb-8 items-center md:whitespace-nowrap">
                  <div className="text-sm md:text-lg">
                        <h1 className="mb-2">52W Low</h1>
                        <h1>46,930.22</h1>
                  </div>
                  <Progress className="bg-gradient-to-r from-red-500 via-orange-500  to-green-500 md:mx-5" placeholder={"progess"} />
                  <div className="text-sm md:text-lg">
                        <h1 className="mb-2">52W High</h1>
                        <h1>46,930.22</h1>
                  </div>
            </div>
    </div>
  )
}

export default OverView