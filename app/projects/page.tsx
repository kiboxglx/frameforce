import { ProjectsClient } from "@/components/sections/ProjectsClient"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Portfolio | FrameForce Construction NJ",
    description: "View our recent remodeling projects. Kitchens, bathrooms, and additions in North Arlington, Montclair, and beyond.",
}

export default function ProjectsPage() {
    return (
        <div className="pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h1 className="text-4xl font-bold text-center text-gray-900">Our Work</h1>
            </div>
            <ProjectsClient />
        </div>
    )
}
