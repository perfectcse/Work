import "./globals.css";
import PageTransition from "../components/pageTransition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-black text-white antialiased"
        suppressHydrationWarning
      >
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}