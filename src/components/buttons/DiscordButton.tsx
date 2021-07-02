import React from "react";
import { DiscordIcon } from "../icons/DiscordIcon"


interface buttonProps {
  size: number
}

export const DiscordButton: React.FC<buttonProps> = (props) => {
  const buttonStyle = `w-${props.size + 3} h-${props.size + 3}`;
  return (
    <button
      className = { buttonStyle + " hover:bg-sd-white rounded-md m-auto" }
    >
      <DiscordIcon
        size={props.size}
      />     
    </button>
  
  )
}