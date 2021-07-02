import React from "react";
import { DiscordButton } from "./buttons/DiscordButton";
export const Navbar:React.FC = () => {
  return (
    <div
      className="h-16 flex flex-row w-full px-6"
    >
      <div
        className="flex mr-auto"
      >
        <div
          className="my-auto font-sans font-medium text-sd-black text-xl "
        >
          Totuslink 
        </div> 
      </div>
      <div
        className="flex ml-auto"
      >
       <DiscordButton
        size={6} 
       /> 
      </div>
    </div>
  )
}