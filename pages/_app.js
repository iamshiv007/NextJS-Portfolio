import "@/styles/globals.css"
import "@/styles/animation.css"
import "@/styles/cssGrid.css"
import "@/styles/Home.module.css"
import { Analytics } from "@vercel/analytics/react"
import ReactGA from "react-ga4";

import { PortfolioProvider } from "@/contextApi/PortfolioContext"
import ThemeProvider from "@/context/themeContext"

ReactGA.initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID);


export default function App({ Component, pageProps }) {

  return (
    <PortfolioProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </PortfolioProvider>
  )
}
