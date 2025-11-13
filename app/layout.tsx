import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Roboto, Staatliches } from "next/font/google";
import BackgroundAnimation from "./BackgroundAnimation";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Justin Kahrs",
  description: "Senior Software Engineer",
  metadataBase: new URL("https://www.justinkahrs.com"),
  openGraph: {
    title: "Justin Kahrs",
    description: "Senior Software Engineer",
    url: "https://www.justinkahrs.com",
    type: "website",
    siteName: "Justin Kahrs",
    images: [
      {
        url: "/1024x1024.png",
        width: 1024,
        height: 1024,
        alt: "Hire this guy!",
      },
    ],
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
        <BackgroundAnimation />
        <main className="content">{children}</main>
      </body>
      <GoogleAnalytics gaId="G-QRZ16VQ70B" />
    </html>
  );
}
