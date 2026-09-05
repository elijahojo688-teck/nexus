import "./globals.css";

export const metadata = {
  title: "NEXUS",
  description: "Connect. Create. Achieve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
