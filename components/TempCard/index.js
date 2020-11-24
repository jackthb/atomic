
import Image from 'next/image'

import styles from './TempCard.module.css'

const TempCard = () => (
    <div className={styles.container}>
        <div className={styles.block}>
            <Image
            src='/images/memoji.png'
            alt="Picture of the author"
            width={250}
            height={250}
            className={styles.image}
            />
            <div className={styles.text}>
                <p>Hi! I am Jack,<br/>
                software developer and keyboard enthusiast from London.</p>
                <h2></h2>
            </div>
        </div>
    </div>
)

export default TempCard;