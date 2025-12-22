import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Shell } from "@/components/layout/Shell"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FrameForce Construction LLC | Home Remodeling North Arlington NJ",
  description: "Premium home remodeling in North Arlington & North Jersey. Licensed & insured experts in kitchens, bathrooms, and framing. Get your free estimate today!",
  metadataBase: new URL("https://frameforceconstruction.com"),
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Shell>{children}</Shell>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />{/* Replace with actual ID */}
      </body>
    </html>
  )
}
