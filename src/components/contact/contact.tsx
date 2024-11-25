import React from 'react'
import styles from "@/components/contact/contact.module.css"

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.leftside}><h1>Let&apos;s Talk <br />AND <br />Connect With Us</h1></div>
      <div className={styles.rightside}>
        <p>Email: yourstyle@gmail.com</p>
        <p>Contact: 020035784666663</p>
      </div>
    </div>
  )
}

export default Contact
