
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Components/navbar'
import { AuthContextProvider } from "./context/authContext";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EsportsBlog',
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
      
        <div className="flex flex-col h-screen">

            {children}
              
        </div>
        </AuthContextProvider>
      </body>
    </html>
  )
}
