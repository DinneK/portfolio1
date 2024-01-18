'use client'

import { useState } from "react";
import ThankYouMessage from "./thank-you-message";
import { sendEmail } from "../../api/send-email";
import { drSugiyama } from "../fonts";
// import { Resend } from "resend";

// type FormData = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

const EmailForm = () => {
  const [showThankYou, setShowThankYou] = useState(false)


  return (
    <section id="email-form" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
      {/* <p className={`${drSugiyama.className} text-black text-[40px]`}>Please contact me through this form.</p> */}

      {showThankYou ? (
        <ThankYouMessage />
      ) : (
        <form action={async (formData) => {
          await sendEmail(formData)
          setShowThankYou(true)
        }}>
        <p className={`${drSugiyama.className} text-black text-3xl mt-6 mb-4 md:text-5xl md:mt-20`}>Please contact me through this form.</p>
        <div className="flex gap-3">
          <input
            className="h-14 w-1/2 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-md placeholder-gray-700"
            name="senderName"
            type="name"
            required
            maxLength={500}
            placeholder="Your name"
          />
          <input
            className="h-14 w-1/2 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-md placeholder-gray-700"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
        </div>
        <textarea
          className="h-52 w-full my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-md placeholder-gray-700"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button type="submit"  className="text-gray-900 bg-white border shadow-md focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
      </form>
      )}
    </section>
  )
}

export default EmailForm