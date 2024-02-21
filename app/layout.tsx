import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Footer} from "@/app/ui/footer";
import {Navbar} from "@/app/ui/navbar";

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
        <body className={`${inter.className}`}>
        <Navbar/>

            {children}
        <Footer/>
        </body>
        </html>
    )
}
