import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posting app</title>
        <meta name="description" content="This is an Evernote Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Bipan</h1>
      </main>
    </div>
  )
}