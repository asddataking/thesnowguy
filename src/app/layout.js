import "./globals.css";
export const metadata = {
  title: "The Snow Guy",
  description: "Effortless snow removal services for your convenience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Main Wrapper */}
        <div className="min-h-screen flex flex-col">
          {/* Content */}
          <main className="flex-grow">{children}</main>
          {/* Footer */}
          <footer className="bg-gray-900 text-gray-300 py-6 text-center">
            <p>&copy; {new Date().getFullYear()} The Snow Guy. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

