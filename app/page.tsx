"use client"
import { usePathname } from "next/navigation";



export default async function Home() {

  const pathname = usePathname()
  console.log(pathname);
  
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name:name
                </div>
                
               
            </div>
        </div>
    </div>
  );
}
