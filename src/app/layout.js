// app/layout.jsx
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StickyCursor from "@/components/common/StickyCursor";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
  icons: {
    icon: "/rocket.png",
    shortcut: "/rocket.png",
  },
  title: "Görkem Karagöl - Portfolio",
  description: "Görkem Karagöl'ün modern ve kullanıcı dostu portföy sitesi.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StickyCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
