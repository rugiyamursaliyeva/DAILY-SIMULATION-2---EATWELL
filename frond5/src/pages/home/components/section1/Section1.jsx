import React from 'react'
import styles from '../section1/Section1.module.scss'
const Section1 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <p>Welcome To EatWell</p>
        <span>Come and eat well with our delicious & healthy foods.</span>
        <div className={styles.btn}>
        <button>Rescrivation</button>
        </div>
      </div>
    </div>
  )
}

export default Section1