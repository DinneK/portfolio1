import { sun, sunMorphed } from "./paths";
import SVGMorph from "../svg-morphing/svg-morph";

export default function SunMorph() {
  return (
    <div>
      <svg className="dark:invert curser-pointer" xmlns="http://www.w3.org/2000/svg" widths='40' height="40" viewBox="0 -960 960 960">
        <SVGMorph paths={[sun, sunMorphed]} />
      </svg>
    </div>
  )
}