import '@/styles/globals.css'
import '@/styles/blendMode.css'
import "@/styles/Intro.css"
import { BlogProvider } from '@/contextApi/blogContext'

export default function App({ Component, pageProps }) {

  return (
    <BlogProvider>
      <Component {...pageProps} />
    </BlogProvider>
  )
}
