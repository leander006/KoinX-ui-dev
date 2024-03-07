"use client"

import Slider from "react-slick";
import image from "@/public/image.png"
import InfoCard from "./InfoCard";
import { useSelector } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "@/utlis/getInfo";
import { useEffect, useState } from "react";

function Footer({no}){

  const trend = useSelector((state) => state.trendPageData.data)

  // console.log(trend);
  const [num, setTnum] = useState()
  useEffect(() => {
        const deviceWidth = window.innerWidth;

        const height = deviceWidth > 768 ? no : deviceWidth == 768 ? 2 : 1;
        setTnum(height)
  }, [num])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: num,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  return (
    <div className="w-full bg-white lg:px-12 lg:py-16">
          <div className="w-full xl:space-x-16">
                <h1 className="font-bold text-2xl">You May Also Like</h1>
                <div className="my-6 ">
                <Slider {...settings}>
                  {trend?.coins.map((m) =>(
                      <InfoCard data={m}/>
                  ))}
                </Slider>
                </div>
          </div>
          <div className="w-full xl:space-x-16">
                <h1 className="font-bold text-2xl">Trending Coins</h1>
                <div className="my-6">
                <Slider {...settings}>
                  {trend?.coins.map((m) =>(
                      <InfoCard data={m}/>
                  ))}
                </Slider>
                </div>
          </div>
    </div>
  )
}

export default Footer