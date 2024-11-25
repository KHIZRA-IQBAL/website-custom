import styles from "@/components/heading/heading.module.css"

import React from 'react'

const Heading = () => {
  return (
    <div className={styles.heading}>
      <h1>OUR PRODUCT</h1>
      <div className={styles.underline}></div>
      <p>Here your reseraches will end with amazing price </p>
    </div>
  )
}

export default Heading
