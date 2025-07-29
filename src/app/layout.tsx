import { clsx } from "clsx";
import { Inter } from "next/font/google";
import { Link } from "@/components/Link";
import NextLink from "next/link";
import { ServiceWorkerRegister } from "@/components/sw-register";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

import "./global.css";
import { Metadata } from "next";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          inter.className,
          `bg-primary-100 text-gray-1200 flex min-h-screen flex-col items-center gap-12 pb-2`,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex w-full items-center justify-center border-b border-gray-600 px-4 py-6">
            <h1 className="grow text-3xl font-medium sm:max-w-3xl sm:px-8">
              <NextLink
                href="/"
                className="hover:text-primary-1100 focus-visible:text-primary-1100"
              >
                Dor Shinar
              </NextLink>
            </h1>
            <ThemeToggle />
          </header>
          <main className="flex w-full flex-1 flex-col items-center overflow-hidden">
            {children}
            <Analytics />
          </main>
          <footer className="flex w-full items-center justify-center">
            <span className="flex-1 px-4 sm:max-w-3xl sm:px-8">
              © {new Date().getFullYear()} Dor Shinar, built with{" "}
              <Link href="https://nextjs.org/">Next.js</Link>
            </span>
          </footer>
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://dorshinar.me/"),
};
