import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Roboto, Staatliches } from "next/font/google";
import BackgroundAnimation from "./BackgroundAnimation";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Anna Kahrs",
  description: "Lead UX Designer",
  metadataBase: new URL("https://www.annakahrs.com"),
  openGraph: {
    title: "Anna Kahrs",
    description: "Lead UX Designer",
    url: "https://www.annakahrs.com",
    type: "website",
    siteName: "Anna Kahrs",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Anna Kahrs — Designing clarity across complex systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna Kahrs",
    description: "Lead UX Designer",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <BackgroundAnimation /> */}
        <main className="content">{children}</main>
      </body>
      <GoogleAnalytics gaId="G-QRZ16VQ70B" />
    </html>
  );
}
