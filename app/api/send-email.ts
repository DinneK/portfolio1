'use server'
// import type { NextApiRequest, NextApiResponse } from "next";
// import { EmailForm } from '../ui/email-form/email-form'
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../../lib/utils";
import ContactEmail from "../../email/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")
  const senderName = formData.get("senderName")

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
  if (!validateString(senderName, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  console.log(process.env.PERSONAL_EMAIL)
  try {
    await resend.emails.send({
      from: "Dinne's Contact Form <onboarding@resend.dev>",
      to: process.env.PERSONAL_EMAIL || '',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string,
      })
      // react: <ContactEmail message={message} senderEmail={senderEmail} senderName={senderName}/>
    })
  } catch(error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }
}