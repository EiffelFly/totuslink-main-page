import React from "react";
import { DiscordButton } from "./buttons/DiscordButton";
import { UseHologramButton } from "./buttons/UseHologramButton";
export const Navbar:React.FC = () => {
  return (
    <div
      className="flex flex-row flex-shrink-0 w-full h-16 px-6"
    >
      <div
        className="flex flex-row mr-auto"
      >
        <div
          className="my-auto mr-16 font-sans text-xl font-bold text-sd-black"
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