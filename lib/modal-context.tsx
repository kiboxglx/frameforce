"use client"

import { createContext, useContext, useState } from "react"

interface ModalContextType {
    openModal: () => void
    closeModal: () => void
    isModalOpen: boolean
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Direct WhatsApp Redirection
    const openModal = () => {
        const message = "Hello FrameForce! I'd like to schedule a free estimate."
        const url = `https://wa.me/16502019270?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

    const closeModal = () => setIsModalOpen(false)

    return (
        <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider")
    }
    return context
}
