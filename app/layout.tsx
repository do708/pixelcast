import "./globals.css";

export const metadata = {
  title: "PixelCast | Digital Signage & Audio Solutions",
  description:
    "Professional Digital Signage, Audio Solutions and PixelCast Cloud Management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}