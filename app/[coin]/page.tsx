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
import {Spinner} from "@nextui-org/react";
import type { RootState } from '@/redux/store'
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
      <div className="pt-24 px-6 lg:px-12 capitalize mb-3 text-[#3E5765] flex">
            <h1>Cryptocurrencies {`>>`} </h1>
            <h1 className="ml-2 text-black">{`${id}`}</h1>
        </div>
      <div className="flex flex-col lg:flex-row w-screen px-6 lg:px-12">

        {loading ?<div className="lg:w-[70%] flex flex-col">
              <div className="flex space-x-8 p-6 mr-4 lg:bg-white lg:rounded-[8px] lg:rounded-b-none rounded-none">
                      <div className="flex space-x-2 items-center">
                      {/* // eslint-disable-next-line */}
                        <img src={main?.image?.thumb} alt="mainLogo" />
                            <h1 className="text-lg">{main?.name}</h1>
                            <h3 className="text-xs">{main?.symbol}</h3>
                      </div>
                      <div className="bg-gray-500 p-3 text-white w-fit rounded-[8px] ">
                            Rank #{main?.market_cap_rank}
                      </div>
              </div>
              <div className=" md:mr-4 h-full bg-white rounded-[8px] lg:rounded-t-none pb-4">
                    <InfoBar/>
                    <div className="lg:px-6 ">
                        <TradingViewWidget/>
                    </div>
              </div>

              <div className="lg:mr-12">
                    <InfoHeader/>
              </div>

        </div> :
        <div className="lg:w-[70%] flex flex-col">
          <h2>loading.....</h2>
        </div>
        }

        
        <div className="lg:w-[30%]">
              <AdComponent/>
              <TrendingComponent/>
        </div>

      </div>

        <div className="hidden lg:flex">
            <Footer no={5}/>
        </div>
    </>

  );
}
