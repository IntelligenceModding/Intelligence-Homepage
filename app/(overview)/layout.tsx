import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '../ui/globals.css'
import {Navbar} from "@/app/ui/navbar";
import {Footer} from "@/app/ui/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Intelligence',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html className='dark' lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
      <Navbar/>
      <div className="flex-grow dark:bg-slate-800 bg-white flex items-center justify-center">
        {children}
      </div>
      <Footer/>
      </body>
      </html>
  )
}
