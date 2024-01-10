import React from "react";
import SkillsIcon from "./skills-icons";
import { SkillsData } from "../../../data/tech-stack-data";

type IconGridProps = {
  startIndex: number
}

const IconGrid = ({ startIndex } : IconGridProps) => {
  const endIndex = startIndex + 9

  return (
    <div className="grid grid-cols-3 gap-4">
      {SkillsData.slice(startIndex, endIndex).map((icon, index) => 
        <SkillsIcon
          key={index}
          src={`/skill-images${icon.Image}`}
          alt={icon.name}
          width={icon.width}
          height={icon.height}
        />
      )}
    </div>
  )
}

export default IconGrid