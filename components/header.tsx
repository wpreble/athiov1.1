"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

export function Header() {
  const [isOnLightSection, setIsOnLightSection] = useState(false)
  const logoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const checkBackground = () => {
      if (!logoRef.current) return

      const logoRect = logoRef.current.getBoundingClientRect()
      const logoCenter = {
        x: logoRect.left + logoRect.width / 2,
        y: logoRect.top + logoRect.height / 2,
      }

      // Get element at logo center position (excluding the logo itself)
      const elementsAtPoint = document.elementsFromPoint(logoCenter.x, logoCenter.y)
      
      // Find the section element (skip header and logo elements)
      for (const el of elementsAtPoint) {
        if (el.tagName === 'SECTION' || el.classList.contains('light-section')) {
          const bgColor = window.getComputedStyle(el).backgroundColor
          // Check if it's a light background (white or near-white)
          if (bgColor.includes('255, 255, 255') || bgColor.includes('rgb(255') || bgColor.includes('rgba(255')) {
            setIsOnLightSection(true)
            return
          }
          if (el.classList.contains('light-section')) {
            setIsOnLightSection(true)
            return
          }
          setIsOnLightSection(false)
          return
        }
      }
    }

    checkBackground()
    window.addEventListener('scroll', checkBackground, { passive: true })
    window.addEventListener('resize', checkBackground, { passive: true })

    return () => {
      window.removeEventListener('scroll', checkBackground)
      window.removeEventListener('resize', checkBackground)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 z-50 px-6 py-6 pointer-events-none">
      <Link href="/" ref={logoRef} className="block pointer-events-auto">
        <div className="relative w-10 h-10">
          <Image
            src="/images/athio-logo-white.png"
            alt="Athio"
            width={40}
            height={40}
            className={`absolute inset-0 transition-opacity duration-300 ${isOnLightSection ? 'opacity-0' : 'opacity-90 hover:opacity-100'}`}
          />
          <Image
            src="/images/athio-logo-black.png"
            alt="Athio"
            width={40}
            height={40}
            className={`absolute inset-0 transition-opacity duration-300 ${isOnLightSection ? 'opacity-90 hover:opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>
    </header>
  )
}
