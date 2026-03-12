

import { notFound } from "next/navigation"
import { servicesData } from "@/lib/content"
import { BookButton } from "@/components/ui/BookButton"
import { Reveal } from "@/components/ui/Reveal"



// Ensure metadata generation works with the data
// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//     const { slug } = await params
// Kept simple for now as per previous client-side focus or standard App Router

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = servicesData[slug] // servicesData is synchronous, that's fine

    if (!service) {
        notFound()
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section with Image Background */}
            <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image || "/images/hero-main.png"}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">{service.h1}</h1>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
                            {service.description}
                        </p>
                    </Reveal>
                    <Reveal delay={200} className="mt-8">
                        <BookButton />
                    </Reveal>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
                    <p className="text-xl font-medium text-gray-900 mb-8 border-l-4 border-blue-600 pl-4 bg-gray-50 py-4 rounded-r-lg">
                        {service.content}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Why Choose Us?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</span>
                                    <span className="font-medium">Engineering Precision</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</span>
                                    <span className="font-medium">Technical Specification Adherence</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</span>
                                    <span className="font-medium">Licensed & Insured</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-blue-900/5 p-6 rounded-2xl border border-blue-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Service Area</h3>
                            <p className="text-gray-600 mb-4 text-sm">We proudly serve North Arlington and surrounding communities in Northern New Jersey.</p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-blue-800 border border-blue-100">Kearny</span>
                                <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-blue-800 border border-blue-100">Harrison</span>
                                <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-blue-800 border border-blue-100">Lyndhurst</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Box */}
                <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white text-center mt-12 shadow-xl shadow-blue-900/20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        Schedule a free 15-minute design consultation to discuss your ideas, budget, and timeline.
                    </p>
                    <div className="flex justify-center">
                        <BookButton text="Schedule Free Consultation" />
                    </div>
                </div>
            </div>
        </div>
    )
}
