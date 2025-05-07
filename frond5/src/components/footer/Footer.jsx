import React from 'react'
import styles from '../footer/Footer.module.scss'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router'
const Footer = () => {
  return (
    <section className={styles.footers}>
        <div className={styles.footer}>
            <div className={styles.main}>
            <div className={styles.about}>
                <p>ABOUT US</p>
                <span>Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit. Cumque, similique, delectus <br /> blanditiis odit expedita amet. 
                    Sed labore ipsum <br /> vel dolore, quis, culpa et magni autem sequi <br /> facere eos tenetur, ex?</span>
            </div>
            <div className={styles.nav1}>
                <p>The Restaurant</p>
                <Link to={'/about'}>About Us</Link>
                <Link to={'/chefs'}>Chefs</Link>
                <Link to={'/event'}>Event</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
            <div className={styles.nav2}>
                <p>Useful links</p>
                <Link to={'/foods'}>Foods</Link>
                <Link to={'/drinks'}>Drinks</Link>
                <Link to={'/breakfast'}>Breakfast</Link>
                <Link to={'/Brunch'}>Brunch</Link>
                <Link to={'/dinner'}>Dinner</Link>
            </div>
            <div className={styles.nav3}>
                <p>Useful links</p>
                <Link to={'/foods'}>Foods</Link>
                <Link to={'/drinks'}>Drinks</Link>
                <Link to={'/breakfast'}>Breakfast</Link>
                <Link to={'/Brunch'}>Brunch</Link>
                <Link to={'/dinner'}>Dinner</Link>
            </div>
            </div>
        </div>
        <div className={styles.icons}>
            <div className={styles.icon}>
            <FaTwitter className={styles.twitter}/>
            <FaFacebookSquare className={styles.face}/>
            <FaInstagram className={styles.insta}/>
            </div>
        </div>
        <div className={styles.all}>
            <p>© Copyright ©2025 All rights reserved | This template is made with  by Colorlib </p>
        </div>

    </section>
  )
}

export default Footer