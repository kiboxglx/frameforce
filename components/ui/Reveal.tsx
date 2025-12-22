"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface RevealProps {
    children: React.ReactNode
    delay?: number // in ms, consistent with original API
    className?: string
}

export const Reveal = ({ children, delay = 0, className }: RevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 48 }} // translate-y-12 is 3rem = 48px
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut", delay: delay / 1000 }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
