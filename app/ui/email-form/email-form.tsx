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
      <p className={`${drSugiyama.className} text-black text-[40px]`}>Please contact me through this form.</p>

      {showThankYou ? (
        <ThankYouMessage />
      ) : (
      <form action={async (formData) => {
        await sendEmail(formData)
        setShowThankYou(true)
      }}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderName"
          type="name"
          required
          maxLength={500}
          placeholder="Your name"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button type="submit">Submit</button>
      </form>
      )}
    </section>
  )
}

export default EmailForm