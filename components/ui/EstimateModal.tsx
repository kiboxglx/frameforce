"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { EstimateForm } from "./EstimateForm"

interface EstimateModalProps {
    isOpen: boolean
    onClose: () => void
}

export const EstimateModal = ({ isOpen, onClose }: EstimateModalProps) => {
    if (!isOpen) return null

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [])

    return (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4">
            <div
                className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            <div className="bg-white w-full max-w-xl sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-300 relative z-10 max-h-[90vh] flex flex-col">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Schedule Design Consultation</h2>
                        <div className="flex items-center gap-1.5 mt-1">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <p className="text-gray-500 text-xs font-medium">
                                Limited spots for {new Date().toLocaleString("en-US", { month: "long" })}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-white hover:bg-gray-100 rounded-full border border-gray-200 text-gray-500 transition-colors shadow-sm"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 md:p-8 overflow-y-auto overscroll-contain pb-24 sm:pb-8">
                    <EstimateForm onSubmit={onClose} />
                </div>
            </div>
        </div>
    )
}
