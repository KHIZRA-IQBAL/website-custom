import React from 'react'
import styles from "@/components/contact/contact.module.css"
import Contact from '@/components/contact/contact'

const Contact1 = () => {
  return (
    <>
      <div className={styles.contactmain}>
      <h1>OUR Contact</h1>
      <div className={styles.underline}></div>
      <p>Here You Can Contact With Us </p>
      <Contact/>
    </div>
    </>
  )
}

export default Contact1
