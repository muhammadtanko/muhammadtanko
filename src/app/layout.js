import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Tanko — Full Stack Developer",
  description: "Portfolio of Muhammad Tanko, a full-stack developer building responsive websites and scalable web applications with React, Next.js, and Node.js.",
  openGraph: {
    title: "Muhammad Tanko — Full Stack Developer",
    description: "Portfolio of Muhammad Tanko, a full-stack developer building responsive websites and scalable web applications with React, Next.js, and Node.js.",
    url: "https://muhammadtanko.vercel.app",
    siteName: "Muhammad Tanko",
    images: ["/images/01M.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Tanko — Full Stack Developer",
    description: "Portfolio of Muhammad Tanko, a full-stack developer building responsive websites and scalable web applications.",
    images: ["/images/01M.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  );
}
