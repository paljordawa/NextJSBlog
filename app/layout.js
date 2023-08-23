import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'


export const metadata = {
  title: 'Demo Site',
  description: 'Generated for Practice Purpose',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-200 dark:bg-slate-900 dark:text-white font-display">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
