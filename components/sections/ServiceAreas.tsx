"use client"

import { MapPin } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceAreasProps {
    onEstimateClick: () => void
}

export const ServiceAreas = ({ onEstimateClick }: ServiceAreasProps) => {
    const cities = [
        { name: "North Arlington", slug: "north-arlington-nj" },
        { name: "Kearny", slug: "kearny-nj" },
        { name: "Lyndhurst", slug: "lyndhurst-nj" },
        { name: "Belleville", slug: "belleville-nj" },
        { name: "Bloomfield", slug: "bloomfield-nj" },
        { name: "Montclair", slug: "montclair-nj" },
        { name: "Nutley", slug: "nutley-nj" },
        { name: "Rutherford", slug: "rutherford-nj" },
    ]

    return (
        <section id="areas" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Local to North Jersey.</h2>
                        <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                            Based in <strong className="text-white">North Arlington</strong>, we understand local building codes
                            and housing styles intimately.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {cities.map((city) => (
                                <Link
                                    key={city.slug}
                                    href={`/service-areas/${city.slug}`}
                                    className="inline-flex items-center space-x-2 text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors cursor-default"
                                >
                                    <MapPin size={14} className="text-blue-400" />
                                    <span>{city.name}</span>
                                </Link>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl text-center shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4 italic text-white">Outside our radius?</h3>
                            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                                We travel up to 40 miles for select high-value projects. Check if you qualify.
                            </p>
                            <button
                                onClick={onEstimateClick}
                                className="w-full bg-white text-gray-900 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors active:scale-95 shadow-lg"
                            >
                                Check Availability
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
