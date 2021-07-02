import React from "react";
import { DiscordIcon } from "../icons/DiscordIcon"


interface buttonProps {
  size: number
}

export const DiscordButton: React.FC<buttonProps> = (props) => {
  const buttonStyle = `w-${props.size} h-${props.size}`;
  return (
    <a
      href="https://discord.gg/3FM8KXCAmB"
      target="_blank"
      rel="noopener noreferrer"
      className = { buttonStyle + " flex hover:bg-sd-white rounded-md m-auto" }
    >
      <DiscordIcon
        size={props.size-3}
      />     
    </a>
  )
}