"use client"

import Image from "next/image"
import fundamental from "@/public/fundamentals.png"
import SentimentCard from "@/components/MainComponent/SubComponent/SentimentCard";
import sent1 from "@/public/senti1.png"
import sent2 from "@/public/senti2.png"
import { SampleNextArrow, SamplePrevArrow } from "@/utlis/getInfo";
import Slider from "react-slick";
import { useEffect, useState } from "react";


function Sentiment() {

      const [num, setTnum] = useState<any>()
      useEffect(() => {
            const deviceWidth = window.innerWidth;

            const height = deviceWidth >= 768 ? 2 : 1;
            setTnum(height)
      }, [num])
            
      const settings = {
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: num,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow/>,                        
          };
  
          

  return (
      <div className="h-full">
      <h1 className="mb-6 text-[#0F1629] text-3xl">Sentiment</h1>
      <div className="flex items-center mb-6">
            <h1 className="text-[#0F1629] mr-3 text-xl">Key Events</h1>
            <Image className="w-4 h-4 rounded-full" src={fundamental} alt="fundamental" />
      </div>
    <div className="rounded-[8px]">
            <Slider className="space-x-4 mx-3" {...settings}>
                  <SentimentCard id={1} img={sent1}/>
                  <SentimentCard id={2} img={sent2}/>
                  <SentimentCard id={1} img={sent1}/>
                  <SentimentCard id={2} img={sent2}/>
            </Slider>
    </div>


      
    <div className="flex items-center mb-6">
            <h1 className="text-[#0F1629] mr-3 text-xl my-6">Analyst Estimates</h1>
            <Image className="w-4 h-4 rounded-full" src={fundamental} alt="fundamental" />
      </div>


      <div className="flex flex-row items-center w-full ">
            <div className="bg-[#EBF9F4] w-[160px] md:w-[130.86px] h-[110px] md:h-[120px] rounded-full flex justify-center items-center">
                  <h1 className="text-[#0FBA83] text-2xl">76%</h1>
            </div>

            <div className="text-[#7C7E8C] w-full space-y-4 ml-4" >
                  <div className="flex items-center">
                        <h1>Buy</h1>
                        <div className="w-full brounded-full h-2.5 ml-4 flex items-center">
                              <div className="bg-green-500 h-2.5 rounded-full mr-1.5" style={{width: "76%"}}></div>
                              <div>76%</div>
                        </div>
                  </div>
                  <div className="flex items-center">
                        <h1>Hold</h1>
                        <div className="w-full brounded-full h-2.5 ml-4 flex items-center">
                              <div className="bg-gray-500 h-2.5 rounded-full mr-1.5" style={{width: "8%"}}></div>
                              <div>8%</div>
                        </div>
                  </div>
                  <div className="flex items-center">
                        <h1>Sell</h1>
                        <div className="w-full brounded-full h-2.5 ml-6 flex items-center">
                              <div className="bg-red-600 h-2.5 rounded-full mr-1.5" style={{width: "16%"}}></div>
                              <div>16%</div>
                        </div>

                  </div>
            </div>
      </div>



</div>
  )
}

export default Sentiment