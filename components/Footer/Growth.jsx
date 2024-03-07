

function Growth({g}) {
  console.log(g);
  return (
      <div className={`${g.growth?"bg-[#c4f1e1] text-[#32BE88]":"bg-[#f6b7af] text-[#EE6855]"} w-fit rounded-[4px] flex items-center p-0.5`}>
        <h1>{g.growth?"+":"-"}</h1>
        <h1 className="ml-2">{g.num2}%</h1>
      </div>

  )
}

export default Growth