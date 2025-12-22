"use client"

import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <img
                                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/frameforce/objects/download?preview=true&prefix=Frameforce%20(1).png&version_id=null"
                                alt="FrameForce Construction LLC"
                                className="h-10 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                            />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
                            Quality craftsmanship you can trust. Serving North Jersey homeowners with pride, precision, and a
                            commitment to excellence.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Services</h5>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                <Link href="/services/kitchen-remodeling" className="hover:text-blue-700 transition block">
                                    Kitchen Remodeling
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/bathroom-remodeling" className="hover:text-blue-700 transition block">
                                    Bathroom Renovation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/flooring" className="hover:text-blue-700 transition block">
                                    Flooring & Tiling
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/painting" className="hover:text-blue-700 transition block">
                                    Interior Painting
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Company</h5>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                <Link href="/about" className="hover:text-blue-700 transition block">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-700 transition block">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-blue-700 transition block">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-blue-700 transition block">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© {new Date().getFullYear()} FrameForce Construction LLC. All rights reserved.</p>
                    <p>Designed for Performance.</p>
                </div>
            </div>
        </footer>
    )
}
