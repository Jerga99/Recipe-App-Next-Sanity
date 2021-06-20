import '../styles/globals.css'
import Navbar from 'components/Navbar'

import 'swiper/swiper.scss';
import "swiper/components/scrollbar/scrollbar.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <>  
      <Navbar/>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
