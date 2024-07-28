import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/1_app/AppProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <AppProvider>
        <body className={inter.className}>{children}</body>
      </AppProvider>
    </html>
  )
}
