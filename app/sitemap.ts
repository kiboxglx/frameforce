import { MetadataRoute } from 'next'
import { servicesData, serviceAreasData } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://frameforceconstruction.com'

    const services = Object.keys(servicesData).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const areas = Object.keys(serviceAreasData).map((slug) => ({
        url: `${baseUrl}/service-areas/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const routes = [
        '',
        '/projects',
        '/about',
        '/contact',
        '/free-estimate',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...routes, ...services, ...areas]
}
