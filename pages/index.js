import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta http-equiv="refresh" content="0;URL=https://go.gdleads.space/click?pid=1465&offer_id=1157"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Перенаправление через 3 секунды..." />
      </main>
      <Footer />
    </div>
  )
}
