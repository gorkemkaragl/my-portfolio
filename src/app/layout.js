import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import StickyCursor from "@/components/ui/StickyCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Görkem Karagöl - Portfolio",
  description: "Görkem Karagöl'ün modern ve kullanıcı dostu portföy sitesi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Theme>
            <StickyCursor />{children}</Theme>
      </body>
    </html>
  );
}
