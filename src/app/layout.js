import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

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
        <Navbar />

        {/* SearchBox */}
        <SearchBox />

        {children}

        </Providers>
      </body>
    </html> 
  )
}
