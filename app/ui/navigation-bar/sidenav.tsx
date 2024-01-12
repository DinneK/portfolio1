'use client'

import { usePathname } from "next/navigation";
import NavLinks from "./nav-links";
import clsx from "clsx";

export default function SideNav() {
  const path = usePathname()
  //holder logic, needs to be refactered
  const isLightPage = (path === '/' || path === '/about' || path === '/projects' || path === '/contact');

  const sidebarClasses = clsx(
    'flex',
    'flex-col',
    'px-3',
    'py-4',
    'md:px-2',
    {
      'bg-light': isLightPage,
      // 'text-white bg-dark': !isLightPage, 
    },
     'h-screen'
  );

  return (
    <div className={sidebarClasses}>
      <NavLinks />
    </div>
  )
}