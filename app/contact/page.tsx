import EmailForm from "../ui/email-form/email-form";
import { drSugiyama } from "../ui/fonts";
import Image from "next/image";


export default function Page() {
  return (
    <main className="flex flex-grow flex-col h-screen md:flex-row md:items-center p-6 bg-light">
        <div className="flex flex-col md:ml-11 md:w-1/2">
          <p className={`${drSugiyama.className} text-[120px] text-black`}>Hi</p>
          <div className="flex gap-4 mb-6">
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
        <div className="md:w-1/2">
          <EmailForm />
        </div>
    </main>
  )
}