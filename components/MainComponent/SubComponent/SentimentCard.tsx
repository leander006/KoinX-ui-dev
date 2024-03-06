import Image from "next/image"

type StaticImageData = any

function SentimentCard(img:StaticImageData) {
      console.log(img.img);
      
  return (
    <div className="flex w-[456px] bg-green-200 p-6 rounded-[8px]">
            <Image  className="w-12 h-12" src={img?.img} alt="sent"/>
            <div className="ml-4 ">
                  <h1 className="text-black mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aliquam.</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nemo excepturi quos modi necessitatibus accusamus omnis maiores impedit molestiae non fugiat, iusto perspiciatis culpa sit. Facilis quo dolorem sequi non!</p>
            </div>
    </div>
  )
}

export default SentimentCard