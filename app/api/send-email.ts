'use server'
// import type { NextApiRequest, NextApiResponse } from "next";
// import { EmailForm } from '../ui/email-form/email-form'
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server")
  console.log(formData.get("senderEmail"))
  console.log(formData.get("message"))

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'dinne22@gmail.com',
    subject: 'Message from contact form',
    text: 'Hello YOU!'
  })
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