import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'

import './globals.css'

const inter = Titillium_Web({ 
  subsets: ['latin'],
  weight: ['200', '400', '600', '900']
})

export const metadata: Metadata = {
  title: 'FlaTimer',
  description: 'FlaTimer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
