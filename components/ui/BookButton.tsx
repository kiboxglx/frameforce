"use client"

import { useModal } from "@/lib/modal-context"
import { ArrowRight } from "lucide-react"

export const BookButton = ({ text = "Book Consultation" }: { text?: string }) => {
    const { openModal } = useModal()

    return (
        <button
            onClick={openModal}
            className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-700/20 flex items-center gap-2"
        >
            {text} <ArrowRight size={20} />
        </button>
    )
}
