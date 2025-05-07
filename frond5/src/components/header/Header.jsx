import React from 'react'
import styles from '../header/Header.module.scss'
import { Link } from 'react-router'
const Header = () => {
  return (
    <section className={styles.header}>
        <div className={styles.head}>
            <div className={styles.main}>
                <p>EatWell</p>
            </div>
            <div className={styles.nav}>
                <Link to={'/'}>HOME</Link>
                <div className={styles.navs}>
                <Link to={'/about'}>ABOUT</Link>
                <Link to={'/offer'}>OFFER</Link>
                <Link to={'/menu'}>MENU</Link>
                <Link to={'/news'}>NEWS</Link>
                <Link to={'/gallery'}>GALLERY</Link>
                <Link to={'/contact'}>CONTACT</Link>
                </div>
            </div>
        </div>
     

    </section>
  )
}

export default Header