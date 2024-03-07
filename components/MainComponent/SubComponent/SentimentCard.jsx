import Image from "next/image"



function SentimentCard({img,id}) {

  return (
    <div className={`flex flex-col ${id % 2 != 0 ?"bg-[#EBF9F4]":"bg-[#E8F4FD]"}  p-3 rounded-[8px] mx-3 ml-3`}>
            <div className="flex">
                <Image  className="w-8 h-8" src={img} alt="sent"/>
                <h1 className="text-black ml-1.5 text-xs md:text-sm mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aliquam.</h1>
            </div>
            <div className="ml-4 text-xs md:text-lg">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nemo excepturi quos modi necessitatibus accusamus omnis maiores impedit molestiae non fugiat, iusto perspiciatis culpa sit. Facilis quo dolorem sequi non!</p>
            </div>
    </div>
  )
}

export default SentimentCard