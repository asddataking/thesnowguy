import "./globals.css";

export const metadata = {
  title: "The Snow Guy — Neighborly Snow Shoveling",
  description: "The Snow Guy — friendly, reliable snow shoveling for homes and small businesses. Senior-friendly, festive, and always neighborly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-night text-white antialiased selection:bg-ice selection:text-night">
        {children}
      </body>
    </html>
  );
}
