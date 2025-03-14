import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Submit form to contact us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
