import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { PageLoader } from "@/components/ui/PageLoader";
import { BRAND } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} | Premium Graphic Design & Brand Visuals`,
  description: BRAND.description,
  keywords: [
    "graphic design",
    "brand identity",
    "presentation design",
    "product labels",
    "Alexander Moses",
    "book covers",
    "webinar slides",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: BRAND.logo, type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-bg-primary font-sans text-text-primary antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <PageLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
