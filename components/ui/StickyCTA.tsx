"use client"

import { Phone } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { cn } from "@/lib/utils"

interface StickyCTAProps {
    onEstimateClick?: () => void
}

export const StickyCTA = ({ onEstimateClick }: StickyCTAProps) => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-gray-200 px-4 py-3 pb-safe flex gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] animate-in slide-in-from-bottom-full duration-500">
        <a
            href="tel:+16502019270"
            onClick={() => sendGAEvent("event", "click_call", { method: "sticky_cta" })}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-900 py-3.5 rounded-xl font-bold text-sm active:bg-gray-100 transition touch-manipulation"
        >
            <Phone size={18} className="shrink-0" /> Call Now
        </a>
        <button
            onClick={() => {
                sendGAEvent("event", "click_get_estimate", { method: "sticky_cta" })
                if (onEstimateClick) onEstimateClick()
            }}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-700/30 active:bg-blue-800 transition touch-manipulation"
        >
            Book Consult
        </button>
    </div>
)
