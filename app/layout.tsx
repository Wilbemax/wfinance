import cx from 'classnames'
import { Inter } from 'next/font/google'

import { AppProvider } from '@/1_app/AppProvider'

import './globals.css'
import './normolize.css'

const inter = Inter({ subsets: ['latin'] })

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cx(inter.className)}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
