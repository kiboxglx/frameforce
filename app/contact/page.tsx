import { EstimateForm } from "@/components/ui/EstimateForm"
import { Phone, Mail, MapPin } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact FrameForce Construction | North Arlington NJ",
    description: "Get in touch with FrameForce. Call, email, or schedule a consultation for your home remodeling project.",
}

export default function ContactPage() {
    return (
        <div className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contact Us</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Ready to transform your home? Reach out to our team in North Arlington for a transparent discussion about your project goals and budget.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-50 p-3 rounded-full text-blue-700">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Phone</p>
                                <p className="text-lg font-bold text-gray-900">(650) 201-9270</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-blue-50 p-3 rounded-full text-blue-700">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Email</p>
                                <p className="text-lg font-bold text-gray-900">contact@frameforce.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-blue-50 p-3 rounded-full text-blue-700">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Office</p>
                                <p className="text-lg font-bold text-gray-900">North Arlington, NJ 07031</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
                    <EstimateForm />
                </div>
            </div>
        </div>
    )
}
