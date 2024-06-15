import type { Metadata } from "next";
import Head from "next/head";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timothy Subekti",
  description: "Timothy Subekti Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  try {
                    var theme = localStorage.getItem('theme');
                    if (!theme || theme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  } catch (e) {}
                })();
              `,
          }}
        />
      </body>
    </html>
  );
}
