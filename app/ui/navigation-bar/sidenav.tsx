'use client'

import { usePathname } from "next/navigation";
import NavLinks from "./nav-links";
import clsx from "clsx";

export default function SideNav() {
  const path = usePathname()
  const isLightPage = (path === '/' || path === '/about');

  const sidebarClasses = clsx(
    'flex',
    'flex-col',
    'px-3',
    'py-4',
    'md:px-2',
    {
      'bg-gradient-to-b from-fuchsia-300 to-white': isLightPage,
      'text-white bg-gradient-to-b from-fuchsia-300 to-black': !isLightPage, 
    },
     'h-screen'
  );

  return (
    <div className={sidebarClasses}>
      <NavLinks />
    </div>
  )
}