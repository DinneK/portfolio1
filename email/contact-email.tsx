import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components'
import { Tailwind } from "@react-email/components";

type ContactEmailProps = {
  message: string
  senderName: string
  senderEmail: string
}

export default function ContactEmail({message, senderName, senderEmail}: ContactEmailProps) {
  return <Html>
    <Head />
    <Preview>New message from my portfolio</Preview>
    <Tailwind>
      <Body className="bg-gray-100">
        <Container>
          <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">You are recieving the following message: </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender's name is: {senderName}</Text>
            <Text>The sender's email is: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
}