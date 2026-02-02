"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const GA_MEASUREMENT_ID = "G-DE75F7CWHD"

type Gtag = (...args: unknown[]) => void

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === "undefined") return

    const gtag = (window as Window & { gtag?: Gtag }).gtag
    if (typeof gtag !== "function") return

    const query = searchParams?.toString()
    const url = query ? `${pathname}?${query}` : pathname

    gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}
