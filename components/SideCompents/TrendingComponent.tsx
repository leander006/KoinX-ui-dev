"use client"

import TrendingCards from "./TrendingCards";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import axios from "axios";
import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from "@/redux/slice/trendPageSlice";

function TrendingComponent() {
 

      const trend = useSelector((state: RootState) => state.trendPageData.data)
      const dispatch = useDispatch()
      
      useEffect(() => {
        const getData=async() =>{
          try {
            dispatch(fetchDataStart());
            const {data}= await axios.get('https://api.coingecko.com/api/v3/search/trending');
            dispatch(fetchDataSuccess(data));
          } catch (error:any) {
            dispatch(fetchDataFailure(error.message));
          }
        }

        getData()
      }, [])
  return (
    <div className="flex flex-col rounded-[8px] bg-white mt-4 p-4">
            <h1 className="font-bold text-lg mb-4">Trending Coins (24h)</h1>
            <div className="space-y-6">
              {trend?.coins?.slice(0,3).map((c:any) =>(
                    <TrendingCards key={c.id} data={c} />
              ))}
            </div>

    </div>
  )
}

export default TrendingComponent