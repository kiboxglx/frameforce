"use client"

import { ShieldCheck, ArrowRight, Phone, Star } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import { sendGAEvent } from "@next/third-parties/google"
import { cn } from "@/lib/utils"

interface HeroProps {
    onEstimateClick: () => void
}

export const Hero = ({ onEstimateClick }: HeroProps) => {
    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Background Blobs */}
            <div
                className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse"
                style={{ animationDuration: "4s" }}
            />
            <div className="absolute top-20 left-0 -translate-x-12 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-3xl lg:max-w-none">
                        <Reveal>
                            {/* Badge removed as it is now in the image */}
                        </Reveal>

                        <Reveal delay={100}>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8 tracking-tight">
                                Premium Home <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
                                    Remodeling.
                                </span>
                            </h1>
                        </Reveal>

                        <Reveal delay={200}>
                            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-medium">
                                High-end craftsmanship and transparent communication. We transform homes across North Arlington with
                                precision and care.
                            </p>
                        </Reveal>

                        <Reveal delay={300}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => {
                                        sendGAEvent("event", "click_get_estimate", { method: "hero" })
                                        onEstimateClick()
                                    }}
                                    className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 active:bg-blue-900 transition-all shadow-xl shadow-blue-700/20 hover:shadow-blue-700/40 hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Book Design Consult <ArrowRight size={20} />
                                </button>
                                <a
                                    href="tel:+16502019270"
                                    onClick={() => sendGAEvent("event", "click_call", { method: "hero" })}
                                    className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-700 hover:text-blue-700 transition-all hover:bg-blue-50 flex items-center justify-center gap-2"
                                >
                                    <Phone size={20} /> (650) 201-9270
                                </a>
                            </div>
                        </Reveal>

                        {/* Trust Bar (High Ticket Trigger) */}
                        <Reveal delay={400}>
                            <div className="mt-16 pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0">
                                    Recognized By:
                                </span>
                                <div className="flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                    <span className="text-lg font-serif font-bold text-gray-800 flex items-center gap-1">
                                        <ShieldCheck size={18} /> BBB <span className="text-[10px] align-top">A+</span>
                                    </span>
                                    <span className="text-lg font-serif font-bold text-gray-800">NKBA</span>
                                    <span className="text-lg font-serif font-bold text-gray-800">NARI</span>
                                    <span className="text-lg font-serif font-bold text-gray-800">
                                        Angi <span className="text-xs font-sans font-normal">Super Service</span>
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column: Hero Image */}
                    <Reveal delay={500} className="relative hidden lg:block">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-700">
                            <img
                                src="/images/hero-main.png"
                                alt="FrameForce - Licensed & Insured"
                                className="w-full h-auto object-cover min-h-[500px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
