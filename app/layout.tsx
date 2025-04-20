export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-900">
	    <main className="max-w-7xl mx-auto px-4">{children}</main>
	  </body>
    </html>
  );
}