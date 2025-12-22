"use client"

import { ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

export const Process = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight text-gray-900">
                                Simple Process. <br />
                                <span className="text-blue-700">Exceptional Results.</span>
                            </h2>
                        </Reveal>
                        <div className="space-y-10 relative">
                            <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-gray-200 hidden md:block"></div>

                            {[
                                {
                                    step: "01",
                                    title: "Consultation & Budget",
                                    text: "We discuss your vision and establish a realistic budget framework.",
                                },
                                {
                                    step: "02",
                                    title: "Design & Selections",
                                    text: "We help source high-quality materials that match your style.",
                                },
                                {
                                    step: "03",
                                    title: "The Build",
                                    text: "Clean workspaces, daily updates, and respect for your home.",
                                },
                                {
                                    step: "04",
                                    title: "Final Walkthrough",
                                    text: "We don't leave until every detail is perfect.",
                                },
                            ].map((item, idx) => (
                                <Reveal key={idx} delay={idx * 150}>
                                    <div className="flex gap-6 relative bg-white z-10">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-blue-100 text-blue-700 font-bold text-sm shrink-0 shadow-sm z-10">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                                            <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative mb-8 lg:mb-0">
                        <Reveal delay={200}>
                            <div className="aspect-[4/3] bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                                <div className="w-full h-full relative group">
                                    <img
                                        src="image_73302b.jpg" // Placeholder
                                        alt="Premium Kitchen Remodeling Project by FrameForce"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={400} className="absolute -bottom-6 -left-4 md:-left-12 z-20">
                            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/10 border border-gray-100 max-w-[260px]">
                                <div className="flex items-center gap-3 mb-3 text-blue-700">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        <ShieldCheck size={20} className="shrink-0" />
                                    </div>
                                    <span className="font-bold text-sm">Fully Insured</span>
                                </div>
                                <p className="text-xs text-gray-500 italic leading-relaxed">
                                    "Professional, on-time, and strictly on-budget."
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
