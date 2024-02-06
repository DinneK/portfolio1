import React from "react";

type IconProps = {
  src: string;
  alt: string;
  width: number,
  height: number,
}

const SkillsIcon = ({ src, alt, width, height} : IconProps) => {
  return (
    <div className="flex items-center justify-center w-16 h-16 border-color: transparent">
      <img src={src} alt={alt} className="w-full h-full object-contain md:dark:invert" />
    </div>
  )
}

export default SkillsIcon