import { Progress } from "@material-tailwind/react";

function OverView() {
  return (
    <div className="h-full">
            <h1 className="mb-6 text-[#0F1629] text-3xl">Performance</h1>
            <div className="flex mb-8 items-center  whitespace-nowrap">
                  <div>
                        <h1 className="mb-2">Today's Low</h1>
                        <h1>46,930.22</h1>
                  </div>
                  <Progress className="bg-gradient-to-r from-red-500 via-orange-500  to-green-500 mx-5" placeholder={"progess"} />
                  <div>
                        <h1 className="mb-2">Today's Low</h1>
                        <h1>46,930.22</h1>
                  </div>
            </div>
            
            <div className="flex items-center whitespace-nowrap">
                  <div>
                        <h1 className="mb-2">52W Low</h1>
                        <h1>46,930.22</h1>
                  </div>
                  <Progress className="bg-gradient-to-r from-red-500 via-orange-500  to-green-500 mx-5" placeholder={"progess"} />
                  <div>
                        <h1 className="mb-2">52W High</h1>
                        <h1>46,930.22</h1>
                  </div>
            </div>
    </div>
  )
}

export default OverView