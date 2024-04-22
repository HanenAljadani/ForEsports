
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import { AuthContextProvider } from "./context/authContext";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ForEsports',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContextProvider>
        <Navbar />
      
        <div className="flex flex-col  bg-grey-300 h-full">

            {children}
              
        </div>
        <Footer/>
        </AuthContextProvider>
      </body>
    </html>
  )
}
