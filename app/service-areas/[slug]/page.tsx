import { notFound } from "next/navigation"
import { serviceAreasData } from "@/lib/content"
import { Metadata } from "next"
import { BookButton } from "@/components/ui/BookButton"
import { MapPin } from "lucide-react"

// type Props removed favor of inline


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const area = serviceAreasData[slug]
    if (!area) return {}
    return {
        title: `Home Remodeling in ${area.city} NJ | FrameForce Construction`,
        description: `Expert general contractor serving ${area.city}, NJ. Kitchens, bathrooms, and additions. Licensed and insured in ${area.city}.`,
    }
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const area = serviceAreasData[slug]
    if (!area) notFound()

    return (
        <div className="pt-20 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
                <MapPin size={16} /> Service Area
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8">
                Home Remodeling in <span className="text-blue-700">{area.city}, NJ</span>
            </h1>

            <div className="prose prose-lg prose-blue max-w-none mb-12 text-gray-700 leading-relaxed">
                <p className="lead text-xl">
                    FrameForce Construction is proud to correspond to the remodeling needs of homeowners in <strong>{area.city}</strong>.
                    We understand the local architecture, zoning requirements, and style preferences that make {area.city} unique.
                </p>

                <h2>Our Services in {area.city}</h2>
                <p>
                    From the initial design consultation to the final walkthrough, we provide a full range of general contracting services:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Kitchen Renovation</h3>
                        <p className="text-sm text-gray-500">Custom cabinets, islands, and modern layouts.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Bathroom Remodeling</h3>
                        <p className="text-sm text-gray-500">Luxury showers, vanities, and tile work.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Home Additions</h3>
                        <p className="text-sm text-gray-500">Expanding your living space with structural integrity.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Whole Home Renovation</h3>
                        <p className="text-sm text-gray-500">Complete transformation of your property.</p>
                    </div>
                </div>

                <p>
                    Whether you are looking to update your kitchen, renovate a master bath, or add space to your home,
                    our team delivers premium craftsmanship right here in {area.city}.
                </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Live in {area.city}?</h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    We are currently accepting new projects in your area. Get a detailed quote for your home improvement project.
                </p>
                <div className="flex justify-center">
                    <BookButton text={`Get a Quote in ${area.city}`} />
                </div>
            </div>
        </div>
    )
}
