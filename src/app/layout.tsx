import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import LayoutContainer from './LayoutContainer';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const space_Mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_Mono.className}>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </body>
    </html>
  );
}
