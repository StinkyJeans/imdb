import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb',
  description: 'This is IMDb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        {/* Header */}
        <Header />

        {/* Nav Bar */}

        {/* SearchBox */}


        {children}

        </Providers>
      </body>
    </html> 
  )
}
