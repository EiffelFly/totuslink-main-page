import React from "react";
import { DiscordButton } from "./buttons/DiscordButton";
import { UseHologramButton } from "./buttons/UseHologramButton";
export const Navbar:React.FC = () => {
  return (
    <div
      className="h-16 flex flex-row w-full px-6 flex-shrink-0"
    >
      <div
        className="flex flex-row mr-auto"
      >
        <div
          className="my-auto font-sans font-bold text-sd-black text-xl mr-16"
        >
          Totuslink 
        </div> 
        <UseHologramButton />
      </div>
      <div
        className="flex ml-auto"
      >
        <DiscordButton
          size={8} 
        />
        
      </div>
    </div>
  )
}