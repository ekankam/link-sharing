import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import favicon from "../public/assets/images/favicon-32x32.png";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Link Sharing",
  description:
    "Link Sharing is a simple web app to share links with your friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} sizes="32x32" />
      </head>
      <body className={`${instrumentSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
