
import Image from "next/image"
import fundamental from "@/public/fundamentals.png"

import { Carousel } from "@material-tailwind/react";
import SentimentCard from "@/components/MainComponent/SubComponent/SentimentCard";
import sent1 from "@/public/senti1.png"


function Sentiment() {
  return (
      <div className="h-full">
      <h1 className="mb-6 text-[#0F1629] text-3xl">Sentiment</h1>
      <div className="flex items-center mb-6">
            <h1 className="text-[#0F1629] mr-3 text-xl">Key Events</h1>
            <Image className="w-4 h-4 rounded-full" src={fundamental} alt="fundamental" />
      </div>


      <Carousel placeholder={"caro"} className="rounded-xl">

                  <SentimentCard id img={sent1}/>
                  <SentimentCard img={sent1}/>
                  <SentimentCard img={sent1}/>
                  <SentimentCard img={sent1}/>
    </Carousel>
    <div className="flex items-center mb-6">
            <h1 className="text-[#0F1629] mr-3 text-xl my-6">Analyst Estimates</h1>
            <Image className="w-4 h-4 rounded-full" src={fundamental} alt="fundamental" />
      </div>

</div>
  )
}

export default Sentiment