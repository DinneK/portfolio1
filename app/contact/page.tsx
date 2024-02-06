'use client'
import { motion } from "framer-motion";
import EmailForm from "../ui/email-form/email-form";
import { drSugiyama } from "../ui/fonts";


export default function Page() {
  return (
    <main className="flex flex-grow flex-col md:h-screen md:flex-row md:items-center p-6 bg-light dark:bg-dark dark:text-white">
        <div className="flex flex-col md:ml-11 md:w-1/2">
          <p className={`${drSugiyama.className} text-[120px]`}>Hi</p>
          <div className="flex gap-4 mb-6">
            <a href="https://www.linkedin.com/in/dinne-kopelevich-174584a/" target="_blank">
              <img src="social-icons/linkedin.svg" alt="Burger menu" width={50} height={50} className="dark:invert"/>
            </a>
            <a href="https://github.com/DinneK" target="_blank">
              <img src="social-icons/github.svg" alt="Burger menu" width={50} height={50} className="dark:invert"/>
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <EmailForm />
        </div>
    </main>
  )
}