import { EstimateForm } from "@/components/ui/EstimateForm"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Get a Free Remodeling Estimate | FrameForce Construction NJ",
    description: "Schedule your free design consultation. Specialized in high-end kitchen, bathroom, and structural renovations in North Jersey.",
}

export default function FreeEstimatePage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-24">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Start Your Project</h1>
                    <p className="text-gray-600 text-lg">
                        Tell us about your vision. We'll help you build it.
                    </p>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                    <EstimateForm />
                </div>
            </div>
        </div>
    )
}
