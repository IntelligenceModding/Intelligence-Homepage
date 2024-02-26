import '@/app/ui/globals.css';

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html className="h-full bg-slate-800">
        <body className="h-full">
        <div>
            {children}
        </div>
        </body>
        </html>
    )
}