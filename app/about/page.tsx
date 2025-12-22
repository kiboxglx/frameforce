import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About FrameForce Construction | Licensed Contractors NJ",
    description: "Learn about FrameForce Construction, our values, and our commitment to high-quality craftsmanship in North Jersey.",
}

export default function AboutPage() {
    return (
        <div className="pt-12 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About FrameForce Construction</h1>
            <div className="prose prose-lg prose-blue">
                <p>
                    FrameForce Construction is a premier general contracting firm based in North Arlington, New Jersey.
                    We specialize in high-ticket residential renovations, including kitchen remodeling, bathroom transformations, and structural additions.
                </p>
                <p>
                    Our mission is simple: to bring transparency, integrity, and superior craftsmanship to an industry often plagued by delays and hidden costs.
                </p>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li><strong>Licensed & Insured:</strong> We carry full liability and workers' comp insurance for your peace of mind.</li>
                    <li><strong>Local Expertise:</strong> We know the building codes and inspectors in North Jersey towns like Kearny, Lyndhurst, and Montclair.</li>
                    <li><strong>Premium Finishes:</strong> We specialize in high-end materials and exacting standards.</li>
                </ul>
            </div>
        </div>
    )
}
