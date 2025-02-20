import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Akhil Vemuri - Portfolio</title>
        <meta name="description" content="Personal portfolio of Akhil Vemuri" />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>{children}</body>
    </html>
  )
}

