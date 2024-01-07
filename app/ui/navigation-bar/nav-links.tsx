'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

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
            className={clsx("flex h-[90px] items-center justify-center p-3 line-through text-xl transform -rotate-90 font-medium hover:no-underline",
            {
              'no-underline': pathname === link.href,
            },
          )}
          >
            <div>{link.name}</div>
          </Link>
        )
      })}
    </>
  )
}