import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: {
    default: "Dinesh - Professional Web Designer & React Native App Developer",
    template: "%s | Dinesh Freelancer"
  },
  description: "Expert freelance web designer and React Native app developer. Specializing in modern web design, mobile app development, and digital solutions. Get premium websites and mobile apps that drive results.",
  keywords: [
    "freelance web designer",
    "react native developer",
    "mobile app development",
    "web development",
    "UI/UX design",
    "responsive web design",
    "next.js developer",
    "freelancer",
    "app designer",
    "digital solutions"
  ],
  authors: [{ name: "Dinesh", url: "https://yourportfolio.com" }],
  creator: "Dinesh",
  publisher: "Dinesh Freelancer",
  
  // Open Graph for social media
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Dinesh - Professional Web Designer & React Native App Developer",
    description: "Expert freelance web designer and React Native app developer. Get premium websites and mobile apps that drive results.",
    siteName: "Dinesh Freelancer Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dinesh Freelancer - Web Design & App Development Services",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Dinesh - Professional Web Designer & React Native App Developer",
    description: "Expert freelance web designer and React Native app developer. Get premium websites and mobile apps that drive results.",
    creator: "@your_twitter_handle",
    images: ["https://yourportfolio.com/twitter-image.jpg"],
  },
  
  // Additional SEO
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
  
  // Verification for search engines
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://yourportfolio.com",
  },
  
  // App-specific metadata
  applicationName: "Dinesh Freelancer Portfolio",
  
  // Category for app stores
  category: "Business",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dinesh",
              "jobTitle": "Freelance Web Designer & React Native Developer",
              "description": "Professional freelance web designer and React Native app developer specializing in modern web solutions and mobile applications.",
              "url": "https://yourportfolio.com",
              "sameAs": [
                "https://linkedin.com/in/your-profile",
                "https://github.com/your-profile",
                "https://twitter.com/your-profile"
              ],
              "knowsAbout": [
                "Web Design",
                "React Native Development",
                "Mobile App Development",
                "UI/UX Design",
                "Next.js",
                "React",
                "JavaScript",
                "TypeScript"
              ],
              "offers": {
                "@type": "Service",
                "serviceType": "Web Design and Mobile App Development",
                "areaServed": "Worldwide",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Web Design & App Development Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Web Design",
                        "description": "Custom responsive web design and development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "React Native App Development",
                        "description": "Cross-platform mobile app development"
                      }
                    }
                  ]
                }
              }
            })
          }}
        />
        
      
      </head>
      <body
        className={`${font.className} antialiased`}
      >
        {children}

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Dinesh Freelancer Portfolio",
              "url": "https://yourportfolio.com",
              "description": "Professional freelance web design and React Native app development services",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://yourportfolio.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
