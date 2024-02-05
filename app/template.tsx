'use client'
import { motion, AnimatePresence } from "framer-motion";
import SideNav from "./ui/navigation-bar/sidenav";
// import PageTransitions from './ui/page-transitions/page-transition'
import { drSugiyama } from './ui/fonts'
import { usePathname } from "next/navigation";


export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const subName = pathname.substring(1)
  let linkName = (pathname === '/') ? 'Home' :subName.charAt(0).toUpperCase() + subName.slice(1)

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="flex flex-col md:flex-row w-full">
        <motion.div 
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{height: "0vh"}}
          exit={{height: "140vh"}}
          transition={{duration: 0.5, ease: "easeOut"}}
        />
        <motion.div 
          className={`fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-9xl curser-default z-50 w-fit h-fit ${drSugiyama.className}`}
          initial={{ opacity: 1}}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{duration: 0.8, ease: "easeOut"}}
        >
          {linkName}
        </motion.div>
        <motion.div 
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{height: "140vh"}}
          animate={{height: "0vh", transition: {delay: 0.5}}}
        />
        <SideNav />
        {children}
      </div>
    </AnimatePresence >
  );
}