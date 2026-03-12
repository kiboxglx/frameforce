"use client"

import { MapPin, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProjectCaseStudyProps {
    image: string
    title: string
    location: string
    challenge: string
    result: string
    stats: { value: string; label: string }[]
    reverse?: boolean
}

const ProjectCaseStudy = ({
    image,
    title,
    location,
    challenge,
    result,
    stats,
    reverse,
}: ProjectCaseStudyProps) => (
    <div
        className={cn(
            "flex flex-col lg:flex-row gap-8 lg:gap-16 items-center py-12 border-b border-gray-100 last:border-0",
            reverse ? "lg:flex-row-reverse" : ""
        )}
    >
        <div className="w-full lg:w-1/2">
            <Reveal>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer aspect-[4/3]">
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-gray-900 flex items-center gap-2">
                        <MapPin size={16} className="text-blue-700" /> {location}
                    </div>
                </div>
            </Reveal>
        </div>
        <div className="w-full lg:w-1/2">
            <Reveal delay={200}>
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    Featured Project
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{title}</h3>

                <div className="space-y-6 mb-8">
                    <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">The Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{challenge}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">The Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{result}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
                            <p className="text-xs text-gray-500 font-medium uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <button className="text-blue-700 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                    View Project Gallery <ArrowRight size={18} className="group-hover:text-blue-900" />
                </button>
            </Reveal>
        </div>
    </div>
)



export const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="mb-16">
                    <span className="text-blue-700 font-bold uppercase tracking-widest text-xs mb-2 block">
                        Our Portfolio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Recent Transformations</h2>
                    <p className="text-gray-600 max-w-3xl text-lg">
                        We don&apos;t just renovate; we solve complex spatial problems and increase property value. Here are a
                        few featured stories from North Jersey.
                    </p>
                </Reveal>

                <div className="space-y-4">
                    <ProjectCaseStudy
                        image="/images/projects/master-suite.png"
                        title="Master Suite & Spa Transformation"
                        location="Montclair, NJ"
                        challenge="A century-old home required a complete structural reconfiguration to create a luxury master suite with a spa-like bathroom, including heavy plumbing relocation and floor joist reinforcement."
                        result="We engineered a new layout that maximized space, installed a curb-less steam shower with linear drains, and integrated custom smart-home climate controls while preserving the architectural integrity."
                        stats={[
                            { value: "850", label: "Sq Ft Luxury" },
                            { value: "Structural", label: "Re-engineering" },
                        ]}
                    />

                    <ProjectCaseStudy
                        image="/images/projects/wood-restoration.png"
                        title="Wood Flooring Restoration"
                        location="Nutley, NJ"
                        challenge="The homeowner wanted to preserve the original 1920s oak floors which were hidden under carpet for decades. They required extensive repair and a modern finish update."
                        result="We performed dustless sanding, replaced damaged boards with reclaimed oak to match, and applied a custom stain blend for a rich, durable finish that respects the home's history."
                        stats={[
                            { value: "2,500", label: "Sq Ft Restored" },
                            { value: "Custom", label: "Stain Match" },
                        ]}
                        reverse={true}
                    />

                    <ProjectCaseStudy
                        image="/images/projects/exterior-framing.jpg"
                        title="Commercial Structural Framing"
                        location="Harrison, NJ"
                        challenge="A multi-story mixed-use development required rapid structural steel and wood framing execution to meet strict winter deadlines. The site had limited access for heavy machinery."
                        result="Our team coordinated crane logistics for beam placement and completed the complex framing system 2 weeks ahead of schedule, ensuring the building was weather-tight before the first snow."
                        stats={[
                            { value: "45,000", label: "Sq Ft Framed" },
                            { value: "Early", label: "Deadline Met" },
                        ]}
                    />

                    <ProjectCaseStudy
                        image="/images/projects/high-ceiling.jpg"
                        title="High-Ceiling Commercial Build-out"
                        location="Newark, NJ"
                        challenge="This commercial open-concept space required precision framing for 20ft+ ceilings and complex HVAC soffits. Safety and stability were paramount for working at heights."
                        result="Using heavy-duty gauge steel studs and scissor lifts, we constructed the towering partition walls and integrated bulkhead systems to seamlessly hide mechanicals while maintaining the open aesthetic."
                        stats={[
                            { value: "22ft", label: "Wall Height" },
                            { value: "Commercial", label: "Grade Steel" },
                        ]}
                        reverse={true}
                    />

                    <ProjectCaseStudy
                        image="/images/projects/gym-renovation.jpg"
                        title="Fitness Center Fit-out"
                        location="Jersey City, NJ"
                        challenge="Transforming a raw shell into a high-end fitness center. The project involved complicated acoustic ceiling grids, heavy equipment load reinforcement, and mirrored wall backing."
                        result="We delivered a robust acoustical ceiling system and reinforced walls to support gym equipment. The finish work included impact-resistant drywall and coordination for specialized rubber flooring."
                        stats={[
                            { value: "Full", label: "Interior Fit-out" },
                            { value: "Acoustic", label: "Solutions" },
                        ]}
                    />
                </div>

                <Reveal className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-700 font-medium transition-colors"
                    >
                        See more on our Projects Hub <ArrowRight size={18} />
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
