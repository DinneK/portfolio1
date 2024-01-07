import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import { inter } from './ui/fonts'
import SideNav from './ui/navigation-bar/sidenav'


export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex ${inter.className}`}>
        <SideNav />
        {children}
      </body>
    </html>
  )
}
