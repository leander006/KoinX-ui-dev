
import Image from "next/image"
import about1 from "@/public/about1.png"
import about2 from "@/public/about2.png"
import arrow from "@/public/arrow.png"

function About() {
  return (
    <div className="h-full"> 
            <h1 className="text-black text-lg md:text-2xl font-bold mb-4 ">About Bitcoin</h1>
            <h3 className="text-black text-md md:text-xl font-bold">What is Bitcoin?</h3>

            <div className="py-4 border text-xs md:text-lg border-gray-400 border-x-0 border-t-0">
                  <p>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
            </div>

            <h1 className="text-black text-md md:text-xl font-bold my-3">Lorem ipsum dolor sit amet</h1>
            <div className="space-y-6 border text-xs md:text-lg border-gray-400 border-t-0 border-x-0 py-2.5">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus expedita enim. Quasi odit dolorem quisquam possimus perspiciatis nostrum atque dolore, et nam odio eveniet itaque autem a. Repellat hic omnis ipsa odit minima autem molestias deleniti libero reprehenderit quibusdam laboriosam sint adipisci, commodi id fugit voluptas? Veritatis quaerat aliquid necessitatibus nam animi quas, ut cum, harum iusto, error similique?</p>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nesciunt vel nobis dolore alias dolor hic, necessitatibus neque magnam, fugiat, quod dicta quaerat sit sapiente. Atque ipsa, dignissimos quod nostrum quaerat ullam nisi perspiciatis perferendis velit eos, quas nobis sint nam tenetur quidem sapiente beatae assumenda quo? Reiciendis doloremque aspernatur similique molestiae sint, ratione eveniet quam laudantium nam earum laboriosam!</p>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo, obcaecati sit perspiciatis nulla illo neque id recusandae molestiae earum vitae quod in quos ab harum minus laudantium similique quasi dolore assumenda porro libero iste! Velit ex at excepturi eum molestias sit quam, recusandae sunt deleniti veniam distinctio optio facere inventore pariatur? Sequi dolorem, quidem inventore cum ipsa fugiat tempore!</p>
            </div>

            <div className="border border-gray-400 border-x-0 border-t-0 pb-4">
                  <h1 className="font-bold text-md md:text-xl mt-6 mb-4">Already Holding Bitcoin?</h1>
                  <div className="grid  md:grid-cols-2 gap-4">
                        <div className="flex bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] p-3 rounded-[8px]">
                              <Image className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] xl:w-[128px] xl:h-[128px] rounded-[8px]" src={about1} alt="aboutlogo1"/>
                              <div className="ml-6 text-xs md:text-xl ">
                                    <h1 className="text-white font-bold">Calculate your</h1>
                                    <h1 className="text-white font-bold">Profits</h1>
                                    <div className="bg-white w-fit p-2 flex items-center rounded-[8px] mt-2">
                                          <h1 className="xl:text-xl">Check Now</h1>
                                          <Image className="w-4 h-4 ml-2" src={arrow} alt="arrowIcon" />
                                    </div>
                              </div>
                        </div>
                        <div className="flex bg-gradient-to-r from-[#FF9865] to-[#EF3031] p-3 rounded-[8px]">
                              <Image className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] xl:w-[128px] xl:h-[128px] rounded-[8px]" src={about2} alt="aboutlogo1"/>
                              <div className="ml-6 text-xs md:text-xl ">
                                    <h1 className="text-white font-bold">Calculate your</h1>
                                    <h1 className="text-white font-bold">Profits</h1>
                                    <div className="bg-white w-fit p-2 flex items-center rounded-[8px] mt-2">
                                          <h1 className="xl:text-xl">Check Now</h1>
                                          <Image className="w-4 h-4 ml-2" src={arrow} alt="arrowIcon" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>

            <div className="mt-4 text-xs md:text-lg">
                  <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
            </div>
    </div>
  )
}

export default About