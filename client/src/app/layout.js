import "./globals.css";

import { Inter, Space_Grotesk } from "next/font/google";
import { CartProvider } from "../context/CartContext";
import { Toaster } from "react-hot-toast";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata = {
  title: "Velora",
  description: "AI Powered Commerce Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${inter.variable} ${spaceGrotesk.variable}`}
      >

        <CartProvider>

          {children}

        </CartProvider>
        <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#111827",
      color: "#fff",
      borderRadius: "16px",
      padding: "16px",
    },
  }}
/>

      </body>

    </html>
  );
}