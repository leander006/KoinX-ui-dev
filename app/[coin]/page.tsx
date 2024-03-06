"use client"

import { usePathname } from 'next/navigation'

export default async function Coin() {
  const pathname = usePathname()
  console.log(pathname);
  
    
      return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">

            </div>
        </div>
      );
    }
    