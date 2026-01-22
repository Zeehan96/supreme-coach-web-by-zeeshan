import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AboutPageContent from '../../components/AboutPageContent'
import AboutPageScripts from '../../components/AboutPageScripts'

export const metadata = {
  title: 'About the Supreme Coach team',
  description: 'Meet the founding team building Supreme Coach!',
  openGraph: {
    title: 'About the Supreme Coach team',
    description: 'Meet the founding team building Supreme Coach!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About the Supreme Coach team',
    description: 'Meet the founding team building Supreme Coach!',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutPageContent />
      <Footer />
      <AboutPageScripts />
    </>
  )
}

