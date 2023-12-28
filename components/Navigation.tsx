"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false)
  const path = usePathname()
  const [isActive, setIsAvtive] = useState(path)
  const [prevPath, setPrevPath] = useState("/")

  useEffect(() => {

    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  return (
    <div>Navigation</div>
  )
}

export default Navigation