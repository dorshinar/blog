import { clsx } from "clsx";
import { Inter } from "next/font/google";
import { Link } from "@/components/Link";
import NextLink from "next/link";
import { ServiceWorkerRegister } from "@/components/sw-register";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "flex min-h-screen flex-col items-center gap-12 bg-zinc-900 pb-2 text-zinc-200",
        )}
      >
        <header className="flex w-full items-center justify-center border-b border-zinc-200/50 py-6">
          <h1 className="grow px-4 text-3xl font-medium sm:max-w-3xl sm:px-8">
            <NextLink
              href="/"
              className="hover:text-emerald-500 focus-visible:text-emerald-500"
            >
              Dor Shinar
            </NextLink>
          </h1>
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
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://dorshinar.me/"),
};
