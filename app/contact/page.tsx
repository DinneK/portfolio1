import EmailForm from "../ui/email-form/email-form";
import { drSugiyama } from "../ui/fonts";
import Image from "next/image";


export default function Page() {
  return (
    <main className="flex flex-grow items-center p-6 h-screen bg-light">
        <div className="flex flex-col basis-1/2">
          <h1 className={`${drSugiyama.className} text-[120px] text-black`}>Hi</h1>
          <div className="flex">
            <a href="https://www.linkedin.com/in/dinne-kopelevich-174584a/" target="_blank">
              <Image
                // style={{ filter: 'invert(100%)' }}
                src="social-icons/linkedin.svg"
                alt="Linkedin Icon and link"
                width={50}
                height={50}
              />
            </a>
            <a href="https://github.com/DinneK" target="_blank">
              <Image
                // style={{ filter: 'invert(100%)' }}
                src="social-icons/github.svg"
                alt="Github Icon and link"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className="basis-1/2 text-black">
          <EmailForm />
        </div>
    </main>
  )
}