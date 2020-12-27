
import Image from 'next/image'

import styles from './TempCard.module.css'


//   React.useEffect(() => {
//     const footer = document.querySelector('div')
//     console.log(div)
//     footer.classList.remove("onLoadFoot");
//   }, [])

const TempCard = () => (
    <div className={styles.container}>
        <div className={`${styles.block} onLoadBlock rounded-md`}>
            <Image
            src='/disppic.jpg'
            alt="Picture of the author"
            width={600}
            height={400}
            className={styles.image}
            />
            <div className={styles.text}>
                <p className='py-32'>monk and keyboard enthusiast</p>
            </div>
        </div>
    </div>
)

export default TempCard;