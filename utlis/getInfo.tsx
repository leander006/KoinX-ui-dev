import axios from "axios";
export async function getUserDetails() {
      try {
        const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
            return response.data;
      }  catch(e) {
        console.log(e);
      }
    }
    
    
   export async function getTrendingCurrencies() {
      try {
        const {data} = await axios.get("https://api.coingecko.com/api/v3/search/trending")
        return data;
      }  catch(e) {
        console.log(e);
      }
    }



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
