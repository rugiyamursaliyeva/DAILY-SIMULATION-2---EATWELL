import React from 'react'
import styles from '../section2/Section2.module.scss'

const Section2 = () => {
  return (
    <section className={styles.main}>
       <div className={styles.second}>
       <div className={styles.mainText}>
            <span>Our Story</span>
            <h1>Welcome</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, 
                in which roasted parts of sentences fly into your mouth.</p>
            <div className={styles.btn}>
                <button>Learn More About Us</button>
            </div>    
        </div>
        <div className={styles.image}>
            <img src="	https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" />
        </div>
       </div>

    </section>
  )
}

export default Section2