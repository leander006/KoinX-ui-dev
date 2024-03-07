"use client"


import { usePathname} from "next/navigation";
import TradingViewWidget from "@/components/MainComponent/TradingViewWidget";
import AdComponent from "@/components/SideCompents/AdComponent";
import TrendingComponent from "@/components/SideCompents/TrendingComponent";
import InfoBar from "@/components/MainComponent/InfoBar";
import InfoHeader from "@/components/MainComponent/SubComponent/InfoHeader";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast';
import type { RootState } from '@/redux/store'
import ClipLoader from "react-spinners/ClipLoader";
import { fetchDataMainFailure, fetchDataMainStart, fetchDataMainSuccess } from "@/redux/slice/mainPageSlice";
import axios from "axios";
export default function Home() {

  const pathname = usePathname()
  const [loading, setLoading] = useState(true)
  const id = pathname?.split("/")[1]
  console.log(id);
  

  const main = useSelector((state: RootState) => state.mainPagedata.data)
  const dispatch = useDispatch()
  
  useEffect(() => {    
    const getData=async() =>{
      try {
        setLoading(false)
        dispatch(fetchDataMainStart());
        const {data}= await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        console.log(data);
        dispatch(fetchDataMainSuccess(data));
        setLoading(true)
      } catch (error:any) {
        dispatch(fetchDataMainFailure(error.message));
        toast.error("No currency with this name")
        console.log(error);
      }
    }

    getData()
    // eslint-disable-next-line
  }, [id])
 

  

  return (
    <>    
{main?<div>

<div className="pt-24 px-6 lg:px-12 capitalize mb-3 text-[#3E5765] flex">
        <h1>Cryptocurrencies {`>>`} </h1>
        <h1 className="ml-2 text-black">{`${id}`}</h1>
    </div>
    <div className="flex flex-col lg:flex-row px-6 lg:px-12">

    <div className="lg:w-[70%] flex flex-col">
          <div className="flex space-x-8 p-6 whitespace-nowrap mr-4 lg:bg-white lg:rounded-[8px] lg:rounded-b-none rounded-none">
                  <div className="flex space-x-2 items-center">
                    <img src={main?.image?.thumb} alt="mainLogo" />
                        <h1 className="text-lg capitalize">{main?.name}</h1>
                        <h3 className="text-sm capitalize">{main?.symbol}</h3>
                  </div>
                  <div className="bg-gray-500 p-3 text-white w-fit rounded-[8px] ">
                        Rank #{main?.market_cap_rank}
                  </div>
          </div>
          <div className=" md:mr-4 h-full bg-white rounded-[8px] lg:rounded-t-none pb-4">
                <InfoBar/>
                <div className="mx-6 lg:mx-6 text-xs md:text-lg">
                    <div className="flex flex-col md:flex-row justify-between">
                          <h1 className="font-bold mb-6">{main?.name}  Price chart(USD)</h1>
                          <div className="flex space-x-2.5 md:space-x-0 mb-3 md:mb-0 md:justify-between md:w-[45%] xl:w-[35%]">
                                <div className="text-gray-400">1H</div>
                                <div className="text-gray-400 ">24H</div>
                                <div className="text-gray-400">7D</div>
                                <div className="text-[#0141CF] h-fit rounded-lg p-0.5 bg-[#E2ECFE]">1M</div>
                                <div className="text-gray-400">3M</div>
                                <div className="text-gray-400">6M</div>
                                <div className="text-gray-400">1Y</div>
                                <div className="text-gray-400">ALL</div>
                          </div>
                    </div>
                    <TradingViewWidget/>
                </div>
          </div>

          <div className="lg:mr-[20px]">
                <InfoHeader/>
          </div>

    </div>

    
    <div className=" lg:w-[30%]">
          <AdComponent/>
          <TrendingComponent/>
    </div>

    </div>

    <div className="hidden lg:flex">
        <Footer no={5}/>
    </div>

</div>:<div className="pt-24 px-6 lg:px-12  flex flex-col justify-center items-center">
<ClipLoader
    loading={loading}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  </div>}
    </>

  );
}


