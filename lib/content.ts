export interface ServiceData {
    title: string
    description: string
    h1: string
    content: string // In a real app this might be MDX or rich text
    image: string
}

export const servicesData: Record<string, ServiceData> = {
    "kitchen-remodeling": {
        title: "Kitchen Remodeling North Arlington NJ | Custom Kitchen Design",
        description: "Transform your kitchen with FrameForce Construction. Professional remodeling services in North Jersey. Premium finishes, transparent pricing. Free quotes!",
        h1: "Expert Kitchen Remodeling in North Arlington",
        content: "Our kitchen remodeling services are designed to transform the heart of your home into a modern, functional, and beautiful space. We specialize in layout optimization, custom cabinetry, quartz countertops, and high-end appliance integration.",
        image: "/images/services/kitchen-remodel.png"
    },
    "bathroom-remodeling": {
        title: "Bathroom Renovation North Arlington NJ | Luxury Bath Design",
        description: "Spa-like bathroom renovations in North Jersey. Walk-in showers, soaking tubs, and accessible designs by FrameForce Construction.",
        h1: "Luxury Bathroom Renovations",
        content: "Turn your bathroom into a private spa retreat. From walk-in showers with frameless glass to freestanding tubs and heated floors, we handle every detail of your bathroom renovation.",
        image: "/images/services/bathroom-remodel.png" 
    },
    "flooring": {
        title: "Flooring Installation & Refinishing | Hardwood & Tile NJ",
        description: "Expert floor installation North Arlington NJ. Hardwood, tile, vinyl, laminate. Dustless sanding and refinishing.",
        h1: "Hardwood & Tile Flooring Installation",
        content: "We install a wide range of flooring options including solid hardwood, engineered wood, luxury vinyl plank (LVP), and ceramic tile. Our team ensures proper subfloor preparation for a durable installation.",
        image: "/images/projects/wood-restoration.png" // Updated to generated image
    },
    "painting": {
        title: "Interior Painting Services North Arlington NJ | FrameForce",
        description: "Professional residential painting. Interior, exterior, trim, and cabinetry. Flawless finishes.",
        h1: "Professional Interior & Exterior Painting",
        content: "A fresh coat of paint can completely revitalize your home. Our professional painters focus on preparation, precision, and using high-quality paints to ensure a flawless and long-lasting finish.",
        image: "/images/projects/exterior-yellow.jpg"
    },
    "framing": {
        title: "Structural Framing & Additions NJ | FrameForce Construction",
        description: "Licensed framing contractors NJ. Structural repairs, additions, load-bearing wall removal. Safety & code compliant.",
        h1: "Structural Framing & Additions",
        content: "As the backbone of any structure, proper framing is crucial. We specialize in structural modifications, removing load-bearing walls, and building additions that seamlessly integrate with your existing home.",
        image: "/images/projects/exterior-framing.jpg" // Using uploaded image
    }
}

export const serviceAreasData: Record<string, { city: string }> = {
    "north-arlington-nj": { city: "North Arlington" },
    "kearny-nj": { city: "Kearny" },
    "lyndhurst-nj": { city: "Lyndhurst" },
    "belleville-nj": { city: "Belleville" },
    "bloomfield-nj": { city: "Bloomfield" },
    "montclair-nj": { city: "Montclair" },
    "nutley-nj": { city: "Nutley" },
    "rutherford-nj": { city: "Rutherford" },
}
