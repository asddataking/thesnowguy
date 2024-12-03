import './globals.css';

export const metadata = {
  title: 'The Snow Guy',
  description: 'Your go-to snow management service.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        
        <main className="min-h-screen">{children}</main>
      
      </body>
    </html>
  );
}

