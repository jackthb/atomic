
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
                <h1 className='text-4xl' id="name">JACK C. BURGESS</h1>
                <p className='pt-20'>monk and keyboard enthusiast</p>
            </div>
        </div>
    </div>
)

export default TempCard;