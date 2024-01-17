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
    <div className='hidden md:flex md:flex-col space-y-6'>
      {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex items-center justify-center p-3 line-through text-xl transform -rotate-90 font-medium hover:no-underline",
            {
              'no-underline': pathname === link.href,
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