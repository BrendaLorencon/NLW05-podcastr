import '../styles/global.scss' // arquivo global

import { Header } from '../components/Header'
import { Player } from '../components/Player'

import styles from '../styles/app.module.scss'
import { PlayerContextProvider } from '../contexts/PlayerContext'

function MyApp({ Component, pageProps }) { //index
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp
