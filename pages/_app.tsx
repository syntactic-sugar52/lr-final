import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MoralisProvider} from 'react-moralis'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <MoralisProvider
  serverUrl={"https://mua6tv6quurp.usemoralis.com:2053/server"}
  appId={"15MOkdn2t27WwAH3kX7DzJWhwJRIG1CTUX2iXbmx"}
  >
    <Component {...pageProps} />
  </MoralisProvider>
  
  )
  

}

export default MyApp
