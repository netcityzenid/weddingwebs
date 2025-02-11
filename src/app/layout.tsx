import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afni & Galang Wedding",
  description: "Saturday, April 19th 2025",
  twitter: {
    card: "summary_large_image",
    site: "@galangalrizky",
    title: "Afni & Galang Wedding",
    description: "Saturday, April 19th 2025",
    image: "https://weddingweb-beta.vercel.app/images/cover.jpeg",
  },
  openGraph: {
    locale: "id_ID",
    type: "article",
    title: "Afni & Galang Wedding",
    description: "Saturday, April 19th 2025",
    url: "https://weddingweb-beta.vercel.app/",
    image: {
      url: "https://weddingweb-beta.vercel.app/images/cover.jpeg",
      secure_url: "https://weddingweb-beta.vercel.app/images/cover.jpeg",
      width: 1000,
      height: 1500,
      alt: "The wedding of Afni & Galang",
      type: "image/jpeg",
    },
    article: {
      section: "Uncategorized",
      published_time: "2024-05-08T13:30:29+07:00",
      modified_time: "2024-09-12T00:36:41+07:00",
    },
  },
  robots: {
    content: "follow, noindex",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots.content} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image.url} />
        <meta property="og:image:secure_url" content={metadata.openGraph.image.secure_url} />
        <meta property="og:image:width" content={metadata.openGraph.image.width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.image.height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.image.alt} />
        <meta property="og:image:type" content={metadata.openGraph.image.type} />
        <meta property="article:section" content={metadata.openGraph.article.section} />
        <meta property="article:published_time" content={metadata.openGraph.article.published_time} />
        <meta property="article:modified_time" content={metadata.openGraph.article.modified_time} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
