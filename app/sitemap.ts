import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ramanmathsclasses.com',
      lastModified: new Date(),
    },
    {
      url: 'https://ramanmathsclasses.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://ramanmathsclasses.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://ramanmathsclasses.com/courses',
      lastModified: new Date(),
    },
    {
      url: 'https://ramanmathsclasses.com/gallery',
      lastModified: new Date(),
    },
    {
      url: 'https://ramanmathsclasses.com/results',
      lastModified: new Date(),
    },
  ]
}