import '../styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen bg-background-color">{children}</body>
    </html>
  );
}
