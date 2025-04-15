import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/layouts/scrolltotop";
import OcrFooter from "@/layouts/ocrfooter";

// Load the Quicksand font
const quicksand = Quicksand({ subsets: ["latin"] });

// Metadata for SEO
export const metadata: Metadata = {
  title: "docsynecx - AI-Powered Document Processing",
  description: "“docsynecx” -Automate data extraction, classification, and organize the data from various document types invoice processing, receipts, bill of landing, including structured, semi-structured, and unstructured data, using technologies like AI, machine learning, and OCR. | docsynecx.com  ",
  icons: {
    icon: "/top-meta.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={quicksand.className}>
        {children}
        <ScrollToTopButton />
        <OcrFooter />
      </body>
    </html>
  );
}
