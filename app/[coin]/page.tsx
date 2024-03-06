"use client"


import { usePathname ,useRouter} from "next/navigation";
import TradingViewWidget from "@/components/MainComponent/TradingViewWidget";
import AdComponent from "@/components/SideCompents/AdComponent";
import TrendingComponent from "@/components/SideCompents/TrendingComponent";
import InfoComponent from "@/components/MainComponent/InfoComponent";


export default function Home() {

  const pathname = usePathname()


  return (
    <div className="flex flex-col lg:flex-row pt-24 w-screen px-12 ">
        

        <div className="lg:w-[70%] mr-4 h-full">
              <InfoComponent/>
              <div className= "h-[460px] px-6 border-none bg-white">
                  <TradingViewWidget/>
            </div>
        </div>
        
        <div className="lg:w-[30%]">
              <AdComponent/>
              <TrendingComponent/>
        </div>
    </div>
  );
}
