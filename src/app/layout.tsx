import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "YouTube Clone",
  description: "A premium YouTube clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{ flex: 1, overflowX: 'hidden' }}>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
