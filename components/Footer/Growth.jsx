

function Growth({g}) {

  // console.log(g);

  return (
      <div className={`${g>0?"bg-[#c4f1e1] text-[#32BE88]":"bg-[#f6b7af] text-[#EE6855]"} w-fit rounded-[4px] flex items-center p-0.5`}>
        <h1>{g > 0?"+":""}</h1>
        <h1 className="text-xs">{g?.toFixed(2)}%</h1>
      </div>

  )
}

export default Growth