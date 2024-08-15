import { AppContextProvider } from '@/context/AppContext'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang='ja' suppressHydrationWarning={true}>
      <head>
        <title>FUN</title>
      </head>

      <body>
        <AppContextProvider>
          <Header />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  )
}
