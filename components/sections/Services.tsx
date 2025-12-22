"use client"

import { Layout, CheckCircle, Square, Paintbrush, Hammer, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
    title: string
    description: string
    icon: React.ElementType
    link: string
    delay: number
}

const ServiceCard = ({ title, description, icon: Icon, link, delay }: ServiceCardProps) => (
    <Reveal delay={delay} className="h-full">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-100 hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300 shrink-0 relative z-10">
                <Icon size={30} className="text-blue-700 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{title}</h3>
            <p className="text-gray-500 text-base leading-relaxed mb-6 flex-grow relative z-10">{description}</p>
            <Link
                href={link}
                className="inline-flex items-center text-blue-700 font-bold text-sm tracking-wide p-2 -ml-2 rounded-lg hover:bg-blue-50 transition w-fit relative z-10 group/link"
            >
                View Details{" "}
                <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </div>
    </Reveal>
)

interface ServicesProps {
    onEstimateClick: () => void // For the "Custom Project" card
}

export const Services = ({ onEstimateClick }: ServicesProps) => {
    return (
        <section id="services" className="py-16 md:py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
                        Our Core Services
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Complete construction solutions tailored to your vision.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    <ServiceCard
                        delay={0}
                        title="Kitchen Remodeling"
                        description="Custom cabinetry, quartz countertops, islands, and premium lighting layouts."
                        icon={Layout}
                        link="/services/kitchen-remodeling"
                    />
                    <ServiceCard
                        delay={100}
                        title="Bathroom Renovation"
                        description="Spa-like designs with waterproof systems (Schluter), premium tiling, and vanities."
                        icon={CheckCircle}
                        link="/services/bathroom-remodeling"
                    />
                    <ServiceCard
                        delay={200}
                        title="Flooring & Tiling"
                        description="Hardwood refinishing, luxury vinyl plank (LVP), and large format tile installation."
                        icon={Square}
                        link="/services/flooring"
                    />
                    <ServiceCard
                        delay={300}
                        title="Interior Painting"
                        description="Level 5 finish, dust-free preparation, and premium paint application."
                        icon={Paintbrush}
                        link="/services/painting"
                    />
                    <ServiceCard
                        delay={400}
                        title="Framing & Additions"
                        description="Structural framing, open concept load-bearing wall removal, and extensions."
                        icon={Hammer}
                        link="/services/framing"
                    />

                    <Reveal delay={500} className="h-full">
                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-3xl flex flex-col justify-center items-center text-center text-white shadow-xl shadow-blue-900/20 h-full transform transition-transform hover:scale-[1.02]">
                            <h3 className="text-2xl font-bold mb-3">Custom Project?</h3>
                            <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                                Have a unique vision? We specialize in complex residential renovations.
                            </p>
                            <button
                                onClick={onEstimateClick}
                                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 active:scale-95 transition shadow-lg w-full"
                            >
                                Start Conversation
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
