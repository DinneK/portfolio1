'use server'
// import type { NextApiRequest, NextApiResponse } from "next";
// import { EmailForm } from '../ui/email-form/email-form'
// import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../../lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")


  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.PERSONAL_EMAIL || '',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      text: message as string,
    })
  } catch(error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }
}

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { data, error } = await resend.emails.send({
//     from: 'Acme <onboarding@resend.dev>',
//     to: ['dinne22@gmail.com'],
//     subject: 'Hello world',
//     react: EmailForm({ firstName: 'John' }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };