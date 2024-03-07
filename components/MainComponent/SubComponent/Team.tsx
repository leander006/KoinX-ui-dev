
import Footer from "@/components/Footer/Footer"
import TeamCardComponent from "./TeamCardComponent"
import profile1 from "@/public/profile1.png"
import profile2 from "@/public/profile2.png"
import profile3 from "@/public/profile3.png"

function Team() {

   const data =[
      {
            name:'John Smith',
            img:profile1
      },
      {
            name:'Elina Williams',
            img:profile2
      },
      {
            name:'John Smith',
            img:profile3
      }
]   
  return (

      <div>
            <div className="text-black text-2xl font-bold mb-4">Team</div>

            <div>
                  <p>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
            </div>

            <div className="space-y-6 my-6">
                  <TeamCardComponent data={data[0]}/>
                  <TeamCardComponent data={data[1]}/>
                  <TeamCardComponent data={data[2]}/>
            </div>
            <div className="flex lg:hidden w-full">
                  <Footer no={1}/>
            </div>
      </div>


  )
}

export default Team