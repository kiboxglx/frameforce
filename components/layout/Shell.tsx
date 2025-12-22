"use client"

import { Navbar } from "@/components/ui/Navbar"
import { StickyCTA } from "@/components/ui/StickyCTA"
import { Footer } from "@/components/sections/Footer"
import { ModalProvider, useModal } from "@/lib/modal-context"

// Inner component to consume context for Modal/Navbar props
const ShellInner = ({ children }: { children: React.ReactNode }) => {
    const { openModal } = useModal()

    return (
        <>
            <Navbar onEstimateClick={openModal} />
            <main className="min-h-screen pt-[80px] md:pt-[100px] bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
                {children}
            </main>
            <Footer />
            <StickyCTA onEstimateClick={openModal} />
        </>
    )
}

export const Shell = ({ children }: { children: React.ReactNode }) => {
    return (
        <ModalProvider>
            <ShellInner>{children}</ShellInner>
        </ModalProvider>
    )
}
