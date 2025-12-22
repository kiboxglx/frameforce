"use client"

import { DollarSign, CheckCircle, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

interface FinancingProps {
    onEstimateClick: () => void
}

export const Financing = ({ onEstimateClick }: FinancingProps) => {
    return (
        <section id="financing" className="py-16 bg-blue-50/50 border-y border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <Reveal>
                        <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                            <DollarSign size={14} />
                            <span>Flexible Payment Options</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                            Don't Wait. Build Your <br /> Dream Home Now.
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We partner with leading financial institutions to offer flexible monthly payment plans. Keep your cash
                            reserves intact while upgrading your home's value.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Rates as low as 0% APR for 12 months",
                                "Approval in minutes without affecting credit score",
                                "Funding up to $100,000 for major renovations",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="bg-green-100 p-1 rounded-full text-green-700">
                                        <CheckCircle size={16} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={onEstimateClick}
                            className="text-blue-700 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                        >
                            Inquire About Financing <ArrowRight size={18} />
                        </button>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                                POPULAR
                            </div>
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <p className="text-sm text-gray-500 font-medium mb-1">Estimated Monthly Payment</p>
                                    <p className="text-4xl font-extrabold text-gray-900">
                                        $350<span className="text-lg text-gray-400 font-normal">/mo</span>
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500 font-medium">Project Value</p>
                                    <p className="text-xl font-bold text-gray-900">$25,000</p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                                <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
                            </div>
                            <p className="text-xs text-gray-400 text-center">
                                *Example rates based on credit approval. Terms apply.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
