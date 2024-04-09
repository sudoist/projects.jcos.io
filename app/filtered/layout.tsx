import "../../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "../components/analytics";

export const metadata: Metadata = {
  title: {
    default: "projects.jcos.io",
    template: "%s | projects.jcos.io",
  },
  description: "Co-founder of unkey.dev and founder of planetfall.io",
  openGraph: {
    title: "projects.jcos.io",
    description:
      "Co-founder of unkey.dev and founder of planetfall.io",
    url: "https://projects.jcos.io",
    siteName: "projects.jcos.io",
    images: [
      {
        url: "https://res.cloudinary.com/langitlupakintoncloud/image/upload/w_800/hugo/jcos.io/logo512x512_ghwawd.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >

        <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-yellow-900 ">
          {children}
        </div>
      </body>
    </html>
  );
}
