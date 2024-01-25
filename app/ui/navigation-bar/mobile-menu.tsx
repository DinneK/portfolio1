import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col items center md:hidden">
      <div onClick={toggleMenu} className="curser-pointer">
        <img src="/menu-bar-icon.svg" alt="Burger menu" width={40} height={40} className="dark:invert"/>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-start justify-start">
          <div className="p-4 sp-pink dark:bg-black dark:text-white">
            {links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className={clsx("block p-2 text-xl text-slate-400 hover:line-through", {
                    "text-gray-950 font-black" : pathname === link.href
                  })}
                  >
                    {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu