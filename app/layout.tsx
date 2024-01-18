import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import { poiretOne } from './ui/fonts'
import SideNav from './ui/navigation-bar/sidenav'


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
    <html lang="en">
      <body className={`flex flex-col md:flex-row ${poiretOne.className}`}>
        <SideNav />
        {children}
      </body>
    </html>
  )
}
