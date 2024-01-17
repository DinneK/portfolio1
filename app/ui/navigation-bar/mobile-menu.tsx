import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
        <Image
          src="menu-bar-icon.svg"
          alt="Menu bar icon and link"
          width={40}
          height={40}
        />
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-start justify-start">
          <div className="bg-white p-4">
            {links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className={clsx("block p-2 text-xl hover:no-underline", {
                    "underline" : pathname === link.href
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