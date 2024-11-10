import styles from "@/components/footer/footer.module.css"
import React from 'react'
import inter, { ibmPlexSherif } from "@/font"
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <section className={`${styles.footer}  ${inter.className}` }>
        <div className={styles.fashion}>
            <h1>Style World.</h1>
            <p className={ibmPlexSherif.className}>SOCIAL MEDIA</p>
            <div className={styles.icon}><FaFacebookSquare size={40} color="#dbad7e"/>
            <FaXTwitter size={40} color="#dbad7e"/>
            <RiInstagramFill size={40} color="#dbad7e"/></div>
        </div>

        <div className={styles.shop}>
          <h1>SHOP</h1>

          <ul>
            <li>Product</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Release</li>
          </ul>
        </div>

        <div className={styles.companydiv}>
          <h1>COMPANY</h1>

          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>News</li>
            <li>Support</li>
          </ul>
        </div>


        <div className={styles.submitdiv}>
          <h1>STAY UP TO DATE</h1>
          <div className={styles.inputdiv}>
            <input type="text" className={styles.input} placeholder="Enter your email "/>
            <button>SUBMIT</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
