"use client"

import { Projects } from "@/components/sections/Projects"
import { useModal } from "@/lib/modal-context"

export const ProjectsClient = () => {
    const { openModal } = useModal()
    return <Projects onEstimateClick={openModal} />
}
