'use client'

import React, { useState } from "react";
import { sendEmail } from "../../api/send-email";
// import { Resend } from "resend";

// type FormData = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

const EmailForm = () => {
  // const [formData, setFormData] = useState({ FormData })


  return (
    <section id="email-form" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
      <h1>Contact Me</h1>
      <p>Please contact me directly at{" "}
        <a className="underline" href="mailto:dinnekopelevich@gmail.com">
        dinnekopelevich@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form action={async (formData) => {
        await sendEmail(formData)
      }}>
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
    </section>
  )
}

export default EmailForm