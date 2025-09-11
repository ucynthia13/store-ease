import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "ShopIt",
  description: "ShopIt App",
};

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className} suppressHydrationWarning>
      <body>
          {children}
          
      </body>
    </html>
  );
}
