import { drSugiyama } from "../ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-grow items-center p-6 h-screen bg-gradient-to-b from-fuchsia-300 to-black h-screen">
      <div className="flex flex-col">
        <h1 className={`${drSugiyama.className} text-[120px] text-white`}>Hi</h1>
        <h3 className="text-[25px] text-white">Email: dinnekopelevich@gmail.com</h3>
        <div className="flex">
          <a href="https://www.linkedin.com/in/dinne-kopelevich-174584a/" target="_blank">
            <Image
              style={{ filter: 'invert(100%)' }}
              src="social-icons/linkedin.svg"
              alt="Linkedin Icon and link"
              width={50}
              height={50}
            />
          </a>
          <a href="https://github.com/DinneK" target="_blank">
            <Image
              style={{ filter: 'invert(100%)' }}
              src="social-icons/github.svg"
              alt="Github Icon and link"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </main>
  )
}