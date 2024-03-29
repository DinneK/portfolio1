import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import { poiretOne } from './ui/fonts'


export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is my portfolio',
  icons: {
    icon: [
      {
        url: '/sloth.png',
      },
    ],
  },
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`flex flex-col md:flex-row ${poiretOne.className}`}>
        {children}
      </body>
    </html>
  )
}
