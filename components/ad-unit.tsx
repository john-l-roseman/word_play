"use client"

import { useEffect } from "react"

export function AdUnit() {
  useEffect(() => {
    try {
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
    } catch (err) {
      console.log("AdSense error:", err)
    }
  }, [])

  return (
    <div className="max-w-full mx-auto my-8">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2063007657687079"
        data-ad-slot="1234567890"
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  )
}
