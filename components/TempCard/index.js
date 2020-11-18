
import Image from 'next/image'

import styles from './TempCard.module.css'

const TempCard = () => (
    <div className={styles.container}>
        <div className={styles.block}>
            <Image
            src='/disppic.jpg'
            alt="Picture of the author"
            width={600}
            height={400}
            className={styles.image}
            />
            <div className={styles.text}>
                <header><p id="name">JACK C. BURGESS</p></header>
                <p>monk and keyboard enthusiast</p>
            </div>
        </div>
    </div>
)

export default TempCard;