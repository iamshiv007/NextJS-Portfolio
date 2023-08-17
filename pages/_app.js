import "@/styles/globals.css"
import "@/styles/animation.css"
import "@/styles/cssGrid.css"
import "@/styles/Home.module.css"
import { Analytics } from "@vercel/analytics/react"

import { BlogProvider } from "@/contextApi/blogContext"

export default function App({ Component, pageProps }) {

  return (
    <BlogProvider>
      <Component {...pageProps} />
      <Analytics />
    </BlogProvider>
  )
}
