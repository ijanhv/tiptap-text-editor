import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import {
  inter,
  mainFont,
  mont,
  roboto,
  ruda,
  noto,
  dela,
  syne,
  instrumentSerif,
  bric,
} from "@/utils/font";

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
      <body
        className={`${mainFont.variable}
       ${dela.variable}
       ${instrumentSerif.variable}
       ${bric.variable}
       font-mainFont ${mont.variable} ${inter.variable} ${ruda.variable} ${roboto.variable} ${noto.variable} ${syne.variable}`}
      >
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
