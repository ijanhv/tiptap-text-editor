/* eslint-disable camelcase */

/* eslint-disable new-cap */

import {
  Poppins,
  Ruda,
  Montserrat,
  Roboto,
  Inter,
  Noto_Sans,
  Dela_Gothic_One,
  Syne,
  Instrument_Serif,
  Bricolage_Grotesque,
} from "next/font/google";

export const mainFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const ruda = Ruda({
  subsets: ["latin"],
  variable: "--font-ruda",
});

export const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrumentSerif",
  weight: ["400"],
});

export const bric = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bric",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const dela = Dela_Gothic_One({
  subsets: ["latin"],
  variable: "--font-dela",
  weight: ["400"],
});
export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "300", "400", "500", "700"],
});

export const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["100", "300", "400", "500", "700"],
});
