import "../pages/global.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="dark:text-white">{children}</body>
    </html>
  );
}