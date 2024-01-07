'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/'},
  { name: 'Projects', href: '/projects'},
  { name: 'About', href: '/about'},
  { name: 'Contact', href: '/contact'}
];

export default function NavLinks () {
  const pathname = usePathname()

  return (
    <>
      {links.map(link => {
        const LinkName = link.name;

        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <p>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}