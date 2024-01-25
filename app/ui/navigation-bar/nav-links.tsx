'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'
import MobileMenu from './mobile-menu';

const links = [
  { name: 'Home', href: '/'},
  { name: 'Projects', href: '/projects'},
  { name: 'About', href: '/about'},
  { name: 'Contact', href: '/contact'}
];

export default function NavLinks () {
  const pathname = usePathname()

  return (
    <div className='hidden md:flex md:flex-col space-y-6 dark:text-white'>
      {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex items-center justify-center p-3 text-xl text-slate-400 transform -rotate-90 font-medium hover:line-through hover:text-gray-950 dark:hover:text-white",
            {
              'no-underline text-gray-950 font-black dark:text-white': pathname === link.href,
            },
          )}
          >
            <div>{link.name}</div>
          </Link>
      ))}
      <MobileMenu />
    </div>
  )
}