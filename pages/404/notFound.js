import Link from 'next/link'

import styles from './notFound.module.css'

export default function Home() {

    return (
      <div className={styles.container}>
          <h1>Whoops! This page isn't complete yet! Come back later.</h1>
          <Link href="/">
            <a>
              <h1>Go back</h1>
            </a>
          </Link>
      </div>
    )
  }
  