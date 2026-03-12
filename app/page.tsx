"use client"

import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Projects } from "@/components/sections/Projects"

import { Process } from "@/components/sections/Process"
import { ServiceAreas } from "@/components/sections/ServiceAreas"
import { useModal } from "@/lib/modal-context"

export default function Home() {
  const { openModal } = useModal()

  return (
    <>
      <Hero onEstimateClick={openModal} />
      <Services onEstimateClick={openModal} />
      <Projects />

      <Process />
      <ServiceAreas onEstimateClick={openModal} />
    </>
  )
}
