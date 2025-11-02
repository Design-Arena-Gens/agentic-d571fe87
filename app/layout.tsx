import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ਭਾਰਤ ਦੀਆਂ ਖਬਰਾਂ - India News in Punjabi',
  description: 'Daily India news translated to Punjabi with AI-generated images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pa">
      <body className="bg-gradient-to-br from-orange-50 via-white to-green-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
