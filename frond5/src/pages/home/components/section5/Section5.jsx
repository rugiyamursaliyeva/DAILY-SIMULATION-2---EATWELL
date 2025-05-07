import React from 'react'
import styles from '../section5/Section5.module.scss'

const Section5 = () => {
  return (
    <section className={styles.main}>
        <div className={styles.mainText}>
            <p>Gallery</p>
            <span>Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts.</span>
        </div>
        <div className={styles.image}>
            <div className={styles.imags}>
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Section5