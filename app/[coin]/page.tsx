"use client"


import { usePathname ,useRouter} from "next/navigation";
import TradingViewWidget from "@/components/MainComponent/TradingViewWidget";
import AdComponent from "@/components/SideCompents/AdComponent";
import TrendingComponent from "@/components/SideCompents/TrendingComponent";
import InfoBar from "@/components/MainComponent/InfoBar";
import Image from "next/image"
import image from "@/public/image.png"
import InfoHeader from "@/components/MainComponent/SubComponent/InfoHeader";

export default function Home() {

  const pathname = usePathname()


  return (
    <div className="flex flex-col lg:flex-row pt-24 w-screen px-6 lg:px-12">
        

        <div className="lg:w-[70%] flex flex-col">
              <div className="flex space-x-8 p-6 mr-4 lg:bg-white lg:rounded-[8px] lg:rounded-b-none rounded-none">
                      <div className="flex space-x-2 items-center">
                            <Image className="w-8 h-8 rounded-full" src={image} alt="logo" />
                            <h1 className="text-lg">Bitcoin</h1>
                            <h3 className="text-xs">BTC</h3>
                      </div>
                      <div className="bg-gray-500 p-3 text-white w-fit rounded-[8px] ">
                            Rank #1
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

        </div>

        
        <div className="lg:w-[30%]">
              <AdComponent/>
              <TrendingComponent/>
        </div>
    </div>
  );
}
