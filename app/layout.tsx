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
  title: {
    default: 'Raman Maths Classes | Vision To Reality - Best Maths Coaching',
    template: '%s | Raman Maths Classes',
  },
  description:
    "Raman Maths Classes by Sarvesh Mishra – An Institute of Topper's Trust. Meet Sarvesh Mishra. The driving force behind Raman Maths Classes, Sarvesh Mishra is a dedicated Mathematics mentor known for his exceptional teaching methodology, conceptual clarity, and unwavering commitment to student success. Affectionately known by many students as the 'Wizard of Mathematics', he has helped produce District Toppers, School Toppers, All India Mathematics Toppers, JEE achievers, and numerous 100/100 scorers in Mathematics. With a student-first approach and years of trusted guidance, he continues to inspire confidence, excellence, and academic achievement. VISION TO REALITY! AN INSTITUTE OF TOPPER'S TRUST.",
  keywords: [
    'Raman Maths Classes',
    'Sarvesh Mishra',
    'best maths coaching',
    'mathematics tutor',
    'JEE maths',
    'CBSE maths',
    'NDA maths',
    'CUET maths',
    'district topper',
    'Class 10 maths',
    'Class 12 maths',
    '100/100 scorer',
    'math coaching institute',
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
        url: 'public/images/logo/1000047065_021d5b59f2bf5860ab3b1609d06e72b6-2_12_2024,_12_47_30_am.jpg',
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
      'An Institute of Topper\'s Trust. Expert mathematics coaching for Class IX–XII, JEE, NDA & CUET.',
    images: ['/images/logo/IMG-20231009-WA0003-removebg-preview_(2).png'],
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
              description:
                'An Institute of Topper\'s Trust. Expert mathematics coaching for Class IX–XII, JEE, NDA & CUET.',
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
