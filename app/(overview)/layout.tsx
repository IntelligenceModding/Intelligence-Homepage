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
        <html className='' lang="en">
        <body className={`${inter.className}`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
