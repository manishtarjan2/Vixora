import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import AppLayout from "@/components/AppLayout";

export const metadata: Metadata = {
  title: "Vixora - Premium YouTube Clone",
  description: "A premium video platform",
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
          <AppLayout>
            {children}
          </AppLayout>
        </Providers>
      </body>
    </html>
  );
}
