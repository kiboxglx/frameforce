"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { cn } from "@/lib/utils"

interface NavbarProps {
    onEstimateClick?: () => void
}

export const Navbar = ({ onEstimateClick }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        const handleResize = () => window.innerWidth >= 768 && setIsOpen(false)

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "Projects", href: "/#projects" },
        { name: "Areas", href: "/#areas" },
    ]

    const handleEstimateClick = () => {
        sendGAEvent("event", "click_get_estimate", { method: "navbar" })
        if (onEstimateClick) onEstimateClick()
    }

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md border-b border-gray-100 py-2 shadow-sm"
                    : "bg-transparent py-4 md:py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Brand Update */}
                    <Link href="/" className="flex items-center shrink-0 group cursor-pointer">
                        <img
                            src="https://storage-admin.lucasmendes.dev/api/v1/buckets/frameforce/objects/download?preview=true&prefix=Frameforce%20(1).png&version_id=null"
                            alt="FrameForce Construction LLC"
                            className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-bold tracking-wide transition-colors duration-300 hover:text-blue-700",
                                    isScrolled ? "text-gray-600" : "text-gray-800"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button
                            onClick={handleEstimateClick}
                            className="bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
                        >
                            Book Consultation
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "p-3 -mr-2 rounded-xl transition touch-manipulation",
                                isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-gray-800 hover:bg-white/50"
                            )}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={cn(
                    "md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 ease-in-out origin-top z-40",
                    isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0"
                )}
            >
                <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-4 px-4 text-lg font-bold text-gray-800 rounded-xl hover:bg-gray-50 active:bg-blue-50 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 my-4"></div>
                    <button
                        onClick={() => {
                            handleEstimateClick()
                            setIsOpen(false)
                        }}
                        className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-700/20 active:scale-[0.98] transition-transform"
                    >
                        Book Free Consultation
                    </button>
                </div>
            </div>
        </nav>
    )
}
