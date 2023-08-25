import clsx from "clsx";
import { Inter } from "next/font/google";
import { Link } from "@/components/Link";
import NextLink from "next/link";
import { ServiceWorkerRegister } from "@/components/sw-register";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

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
          "min-h-screen flex flex-col gap-12 items-center bg-zinc-900 text-zinc-200 pb-2",
        )}
      >
        <header className="flex justify-center items-center w-full py-6 border-b border-zinc-200">
          <h1 className="grow sm:max-w-3xl px-4 sm:px-8 text-3xl font-medium">
            <NextLink
              href="/"
              className="hover:text-emerald-500 focus-visible:text-emerald-500"
            >
              Dor Shinar
            </NextLink>
          </h1>
        </header>
        <main className="flex flex-1 w-full flex-col items-center overflow-hidden">
          {children}
          <Analytics />
        </main>
        <footer className="flex items-center justify-center w-full">
          <span className="flex-1 sm:max-w-3xl px-4 sm:px-8">
            © {new Date().getFullYear()} Dor Shinar, built with{" "}
            <Link href="https://nextjs.org/">Next.js</Link>
          </span>
        </footer>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
