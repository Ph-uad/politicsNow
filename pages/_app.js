import Layout from '@/components/UI/Layout'

import '@/styles/globals.css';
import '@/styles/switch.css';



export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  )
}