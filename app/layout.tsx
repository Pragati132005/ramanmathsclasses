import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter, Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ramanmathsclasses.com'),
  icons: {
    icon: '/icon.png',
  },
  title: {
    default: 'Raman Maths Classes | Sarvesh Mishra | Vision To Reality - Best Maths Coaching Institute in Etawah',
    template: '%s | Raman Maths Classes',
  },
  description:
    "Raman Maths Classes by Sarvesh Mishra – An Institute of Topper's Trust. Meet Sarvesh Mishra. The driving force behind Raman Maths Classes, Sarvesh Mishra is a dedicated Mathematics mentor known for his exceptional teaching methodology, conceptual clarity, and unwavering commitment to student success. Affectionately known by many students as the 'Architect of Toppers', he has helped produce District Toppers, School Toppers, All India Mathematics Toppers, JEE achievers, and numerous 100/100 scorers in Mathematics. With a student-first approach and years of trusted guidance, he continues to inspire confidence, excellence, and academic achievement. VISION TO REALITY! AN INSTITUTE OF TOPPER'S TRUST.",
  keywords: [
    'Raman Maths Classes',
    'Sarvesh Mishra',
    'Sarvesh Mishra Etawah',
    'Sarvesh Mishra sir',
    'Sarvesh Mishra maths',
    'Sarvesh Mishra Sir Maths',
    'Sarvesh Mishra Etawah maths',
    'best maths coaching Etawah',
    'maths Coaching Etawah',
    'mathematics Teacher Etawah',
    'JEE maths',
    'CBSE maths',
    'NDA maths',
    'CUET maths',
    'district topper',
    'Class 10 maths',
    'Class 9 maths',
    'Class 11 maths',
    'Class 12 maths',
    '100/100 scorer',
    'District Topper',
    'School Topper',
    'All India Mathematics Topper',
    'best maths coaching institute in Etawah',
  ],
  authors: [{ name: 'Sarvesh Mishra' }],
  creator: 'Raman Maths Classes',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Raman Maths Classes',
    title: 'Raman Maths Classes | Vision To Reality',
    description:
      'An Institute of Topper\'s Trust. Expert mathematics coaching producing District Toppers, 100/100 scorers & JEE achievers.',
    images: [
      {
        url: '/images/logo/1000047065_021d5b59f2bf5860ab3b1609d06e72b6-2_12_2024,_12_47_30_am.jpg',
        width: 1200,
        height: 630,
        alt: 'Raman Maths Classes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raman Maths Classes | Vision To Reality',
    description:
      'An Institute of Topper\'s Trust. Expert mathematics coaching for Class IX–XII, Foundations(JEE, NDA & CUET).',
    images: ['/images/logo/1000047065_021d5b59f2bf5860ab3b1609d06e72b6-2_12_2024,_12_47_30_am.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Raman Maths Classes',
              url: 'https://ramanmathsclasses.com',
              logo: 'https://ramanmathsclasses.com/icon.png',
              telephone: '+919058934376',
              address: {
              '@type': 'PostalAddress',
              addressLocality: 'Etawah',
              addressRegion: 'Uttar Pradesh',
              addressCountry: 'IN'
              },
              
              description:
                'An Institute of Topper\'s Trust. Expert mathematics coaching for Class IX–XII, Foundations(JEE, NDA & CUET).',
              founder: {
                '@type': 'Person',
                name: 'Sarvesh Mishra',
                jobTitle: 'Founder & Lead Mathematics Mentor',
              },
              knowsAbout: ['Mathematics', 'CBSE', 'JEE', 'NDA', 'CUET'],
              slogan: 'Vision To Reality',
            }),
          }}
        />
      </head>
      <body className="font-poppins antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
