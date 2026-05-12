import "./globals.css";

export const metadata = {
  title: "Velora",
  description: "AI Powered Commerce Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}