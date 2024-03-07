     export function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius:"32px", background: "black"  }}
        onClick={onClick}
      />
    );
  }
  
  export function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",borderRadius:"32px", background: "black" }}
        onClick={onClick}
      />
    );
  }


export function getNum(data:string) {

const regex = /<sub\s*title="([^"]*)"\s*>/;
const hasSubTag = data.includes('<sub');


let extractedValue =data;
if (hasSubTag) {
  const match = data.match(regex);
  if (match && match.length > 1) {
    extractedValue = "$"+match[1];
  }
}


  return extractedValue 
}  