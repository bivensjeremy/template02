import { Fira_Code as FontMono, Inter as FontSans, Funnel_Sans, Montserrat } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontMontserrat = Montserrat({
  subsets: ['latin']
})

export const fontFunnel = Funnel_Sans({
  subsets: ['latin']
})