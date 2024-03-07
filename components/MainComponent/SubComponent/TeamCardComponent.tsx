import Image from "next/image"



function TeamCardComponent(data:any) {
      // console.log(data);
  return (
    <div className="bg-[#E8F4FD] flex flex-col md:flex-row md:items-center px-2 md:px-6 py-3 rounded-[7.46px]">
            <div className="flex flex-col items-center whitespace-nowrap">
                  <Image className="w-[96.35px] h-[104.81px] rounded-[6.68px]" src={data?.data?.img} alt="teamLogo"/>
                  <h1 className="mt-3 text-sm md:text-lg font-bold">{data?.data?.name}</h1>
                  <h3 className="text-[#788F9B] text-xs md:text-md">Designation here</h3>
            </div>

            <div>
                  <p className="md:px-3 text-sm md:text-lg text-center md:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati suscipit doloremque voluptatum. Repellendus, cumque qui. Consequatur autem eum quos praesentium molestiae totam mollitia nisi laboriosam, temporibus quaerat obcaecati quam id dignissimos deleniti perspiciatis est, officia amet velit nemo aspernatur esse.</p>
            </div>

    </div>
  )
}

export default TeamCardComponent