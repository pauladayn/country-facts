import Providers from './Providers'
import './globals.css'
import { Manrope} from 'next/font/google'
import Header from './components/organisms/Header'

const manrope = Manrope({ subsets: ['latin'], weight: ['300', '600', '700', '800'] });

export const metadata = {
  title: 'Country facts',
  description: 'A website to get basic information about countries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-white dark:bg-zinc-800`}>
        <Providers>
          <Header />
            {children}
        </Providers>
      </body>
    </html>
  )
}
