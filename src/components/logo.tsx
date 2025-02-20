"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"

interface LogoProps {
  className?: string
  onClick?: () => void
}

export default function Logo({ className, onClick }: LogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn("cursor-pointer", className)}
      onClick={onClick}
    >
      <Link href="/" className="inline-block">
        <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-xl font-serif font-bold text-primary-foreground">AV</span>
        </div>
      </Link>
    </motion.div>
  )
}