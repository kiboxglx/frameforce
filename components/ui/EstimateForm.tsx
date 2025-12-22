"use client"

import { Calendar, ChevronRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"

export const EstimateForm = ({ onSubmit }: { onSubmit?: () => void }) => {
    return (
        <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start">
                <Calendar className="text-blue-700 shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-blue-900 leading-snug">
                    <strong>High Ticket Tip:</strong> We recommend a 15-min discovery call to discuss your vision and
                    budget before the site visit.
                </p>
            </div>

            <form
                className="space-y-6"
                onSubmit={(e) => {
                    e.preventDefault()
                    sendGAEvent("event", "form_submit_estimate", { value: "lead" })
                    alert("Redirecting to Calendar/Thank you page...")
                    if (onSubmit) onSubmit()
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name *</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                            placeholder="(201) 555-0123"
                        />
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Project Type *</label>
                    <div className="relative group">
                        <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-all shadow-sm cursor-pointer">
                            <option>Full Kitchen Remodel ($45k+)</option>
                            <option>Master Bath Renovation ($25k+)</option>
                            <option>Home Addition / Framing</option>
                            <option>Whole House Renovation</option>
                            <option>Flooring / Painting Only</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <ChevronRight className="rotate-90" size={18} />
                        </div>
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Project Vision</label>
                    <textarea
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px] resize-y transition-all shadow-sm"
                        placeholder="Describe your goals (e.g., Open concept, modern finishes, specific timeline)..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-900/20 active:scale-[0.98] transition-all duration-200"
                >
                    Confirm Request
                </button>
            </form>
        </div>
    )
}
