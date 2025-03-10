"use client"

import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

interface BlurTextProps {
  text: string
  className?: string
}

export function BlurText({ text, className }: BlurTextProps) {
  const [isBlurred, setIsBlurred] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl font-bold transition-all duration-1000",
        isBlurred ? "blur-xl" : "blur-0",
        className,
      )}
    >
      {text}
    </h1>
  )
}

