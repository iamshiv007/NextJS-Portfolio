import '@/styles/globals.css'
import '@/styles/blendMode.css'
import "@/styles/Intro.css"
import "@/styles/animation.css"
import "@/styles/Navbar.css"
import { BlogProvider } from '@/contextApi/blogContext'

export default function App({ Component, pageProps }) {

  return (
    <BlogProvider>
      <Component {...pageProps} />
    </BlogProvider>
  )
}
