import Slider from "react-slick";
import image from "@/public/image.png"
import InfoCard from "./InfoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "@/utlis/getInfo";

function Footer({no}){

  const data =[
    {
    img:image,
    name:"Bitcion",
    num1:32000,
    growth:true,
    num2:4.56,
    url:image
  }
]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: no,
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
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                </Slider>
                </div>
          </div>
          <div className="w-full xl:space-x-16">
                <h1 className="font-bold text-2xl">Trending Coins</h1>
                <div className="my-6">
                <Slider {...settings}>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                      <InfoCard data={data[0]}/>
                </Slider>
                </div>
          </div>
    </div>
  )
}

export default Footer